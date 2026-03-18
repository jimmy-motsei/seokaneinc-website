#!/usr/bin/env python3
"""
Marketing Audit PDF Report Generator
Produces a branded, multi-page PDF from a JSON data file.
Usage: python3 generate_pdf_report.py [data.json] [output.pdf]
"""

import sys
import json
import math
from datetime import datetime

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, PageBreak, KeepTogether
)
from reportlab.platypus.flowables import Flowable
from reportlab.graphics.shapes import Drawing, Circle, Rect, String, Line, Polygon
from reportlab.graphics.charts.barcharts import HorizontalBarChart
from reportlab.graphics import renderPDF

# ── Palette ──────────────────────────────────────────────────────────────────
C_NAVY      = colors.HexColor("#1B2A4A")
C_BLUE      = colors.HexColor("#2D5BFF")
C_ORANGE    = colors.HexColor("#FF6B35")
C_GREEN     = colors.HexColor("#00C853")
C_AMBER     = colors.HexColor("#FFB300")
C_RED       = colors.HexColor("#FF1744")
C_LIGHTGRAY = colors.HexColor("#F5F7FA")
C_TEXT      = colors.HexColor("#2C3E50")
C_MUTED     = colors.HexColor("#7F8C9B")
C_BORDER    = colors.HexColor("#E0E6ED")
C_WHITE     = colors.white

PAGE_W, PAGE_H = A4
MARGIN = 18 * mm


def score_color(score):
    if score >= 80: return C_GREEN
    if score >= 60: return C_BLUE
    if score >= 40: return C_AMBER
    return C_RED


def score_grade(score):
    if score >= 85: return "A"
    if score >= 70: return "B"
    if score >= 55: return "C"
    if score >= 40: return "D"
    return "F"


def severity_color(sev):
    s = sev.lower()
    if s == "critical": return C_RED
    if s == "high":     return C_ORANGE
    if s == "medium":   return C_AMBER
    return C_BLUE


# ── Gauge Flowable ────────────────────────────────────────────────────────────
class ScoreGauge(Flowable):
    def __init__(self, score, width=160, height=110):
        super().__init__()
        self.score = score
        self.width = width
        self.height = height

    def draw(self):
        c = self.canv
        cx = self.width / 2
        cy = 30
        r = 55

        # Background arc (grey)
        c.setStrokeColor(C_BORDER)
        c.setLineWidth(14)
        c.arc(cx - r, cy - r, cx + r, cy + r, startAng=0, extent=180)

        # Score arc
        col = score_color(self.score)
        extent = (self.score / 100) * 180
        c.setStrokeColor(col)
        c.setLineWidth(14)
        c.arc(cx - r, cy - r, cx + r, cy + r, startAng=180 - extent, extent=extent)

        # Score text
        c.setFillColor(C_NAVY)
        c.setFont("Helvetica-Bold", 36)
        c.drawCentredString(cx, cy + 10, str(self.score))

        c.setFillColor(C_MUTED)
        c.setFont("Helvetica", 10)
        c.drawCentredString(cx, cy - 4, "/ 100")

        # Grade badge
        grade = score_grade(self.score)
        c.setFillColor(col)
        c.roundRect(cx - 18, cy - 26, 36, 22, 4, fill=1, stroke=0)
        c.setFillColor(C_WHITE)
        c.setFont("Helvetica-Bold", 13)
        c.drawCentredString(cx, cy - 17, f"Grade {grade}")

        # Labels
        c.setFillColor(C_MUTED)
        c.setFont("Helvetica", 8)
        c.drawString(cx - r - 4, cy - 14, "0")
        c.drawCentredString(cx, cy + r + 10, "100")
        c.drawRightString(cx + r + 4, cy - 14, "50")


# ── Bar Chart Flowable ────────────────────────────────────────────────────────
class CategoryBars(Flowable):
    def __init__(self, categories, width=440, height=180):
        super().__init__()
        self.categories = categories
        self.width = width
        self.height = height

    def draw(self):
        c = self.canv
        items = list(self.categories.items())
        n = len(items)
        bar_h = 18
        gap = 10
        label_w = 130
        bar_area = self.width - label_w - 50
        total_h = n * (bar_h + gap)
        y_start = total_h - bar_h

        for i, (name, data) in enumerate(items):
            score = data["score"]
            col = score_color(score)
            y = y_start - i * (bar_h + gap)

            # Label
            c.setFillColor(C_TEXT)
            c.setFont("Helvetica", 8)
            c.drawRightString(label_w - 6, y + 5, name)

            # Background bar
            c.setFillColor(C_LIGHTGRAY)
            c.roundRect(label_w, y, bar_area, bar_h, 3, fill=1, stroke=0)

            # Score bar
            filled = int((score / 100) * bar_area)
            c.setFillColor(col)
            c.roundRect(label_w, y, filled, bar_h, 3, fill=1, stroke=0)

            # Score label
            c.setFillColor(C_WHITE if filled > 30 else C_TEXT)
            c.setFont("Helvetica-Bold", 8)
            if filled > 30:
                c.drawRightString(label_w + filled - 5, y + 6, f"{score}")
            else:
                c.setFillColor(C_TEXT)
                c.drawString(label_w + filled + 4, y + 6, f"{score}")


# ── Cover header band ─────────────────────────────────────────────────────────
class CoverBand(Flowable):
    def __init__(self, width, height=90):
        super().__init__()
        self.width = width
        self.height = height

    def draw(self):
        c = self.canv
        # Navy band
        c.setFillColor(C_NAVY)
        c.rect(0, 0, self.width, self.height, fill=1, stroke=0)
        # Orange accent bar
        c.setFillColor(C_ORANGE)
        c.rect(0, self.height - 5, self.width, 5, fill=1, stroke=0)
        # Title
        c.setFillColor(C_WHITE)
        c.setFont("Helvetica-Bold", 22)
        c.drawString(20, self.height - 36, "MARKETING AUDIT REPORT")
        c.setFont("Helvetica", 11)
        c.setFillColor(colors.HexColor("#AAB8CC"))
        c.drawString(20, self.height - 54, "Prepared by AI Marketing Suite")


# ── Section Header ────────────────────────────────────────────────────────────
class SectionHeader(Flowable):
    def __init__(self, title, width=440, accent=C_ORANGE):
        super().__init__()
        self.title = title
        self.width = width
        self.accent = accent
        self.height = 28

    def draw(self):
        c = self.canv
        c.setFillColor(C_LIGHTGRAY)
        c.roundRect(0, 0, self.width, self.height, 3, fill=1, stroke=0)
        c.setFillColor(self.accent)
        c.rect(0, 0, 4, self.height, fill=1, stroke=0)
        c.setFillColor(C_NAVY)
        c.setFont("Helvetica-Bold", 11)
        c.drawString(14, 9, self.title.upper())


# ── Styles ────────────────────────────────────────────────────────────────────
def make_styles():
    base = getSampleStyleSheet()
    styles = {}

    styles["body"] = ParagraphStyle(
        "body", fontName="Helvetica", fontSize=9,
        textColor=C_TEXT, leading=14, spaceAfter=4
    )
    styles["small"] = ParagraphStyle(
        "small", fontName="Helvetica", fontSize=8,
        textColor=C_MUTED, leading=12
    )
    styles["label"] = ParagraphStyle(
        "label", fontName="Helvetica-Bold", fontSize=8,
        textColor=C_NAVY, leading=12
    )
    styles["h2"] = ParagraphStyle(
        "h2", fontName="Helvetica-Bold", fontSize=13,
        textColor=C_NAVY, leading=18, spaceBefore=10, spaceAfter=6
    )
    styles["meta"] = ParagraphStyle(
        "meta", fontName="Helvetica", fontSize=9,
        textColor=C_MUTED, leading=13
    )
    styles["execsum"] = ParagraphStyle(
        "execsum", fontName="Helvetica", fontSize=9.5,
        textColor=C_TEXT, leading=15, spaceAfter=6,
        borderPad=10
    )
    styles["action"] = ParagraphStyle(
        "action", fontName="Helvetica", fontSize=8.5,
        textColor=C_TEXT, leading=13, spaceAfter=3,
        leftIndent=12
    )
    return styles


# ── Page template with footer ─────────────────────────────────────────────────
def add_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(C_MUTED)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(MARGIN, 10 * mm, "AI Marketing Suite — Confidential")
    canvas.drawRightString(PAGE_W - MARGIN, 10 * mm, f"Page {doc.page}")
    canvas.setStrokeColor(C_BORDER)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN, 13 * mm, PAGE_W - MARGIN, 13 * mm)
    canvas.restoreState()


# ── Build PDF ─────────────────────────────────────────────────────────────────
def build_pdf(data, output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=MARGIN, bottomMargin=20 * mm,
        title=f"Marketing Audit — {data.get('brand_name', '')}",
        author="AI Marketing Suite",
    )

    S = make_styles()
    story = []
    content_w = PAGE_W - 2 * MARGIN

    brand   = data.get("brand_name", "Unknown")
    url     = data.get("url", "")
    date    = data.get("date", datetime.today().strftime("%B %d, %Y"))
    score   = int(data.get("overall_score", 0))
    summary = data.get("executive_summary", "")
    cats    = data.get("categories", {})
    findings = data.get("findings", [])
    quick   = data.get("quick_wins", [])
    medium  = data.get("medium_term", [])
    strategic = data.get("strategic", [])
    competitors = data.get("competitors", [])

    # ── PAGE 1: Cover ─────────────────────────────────────────────────────────
    story.append(CoverBand(content_w))
    story.append(Spacer(1, 8 * mm))

    # Meta row
    meta_data = [
        [Paragraph(f"<b>Client:</b> {brand}", S["meta"]),
         Paragraph(f"<b>URL:</b> {url}", S["meta"]),
         Paragraph(f"<b>Date:</b> {date}", S["meta"])],
    ]
    meta_tbl = Table(meta_data, colWidths=[content_w * 0.3, content_w * 0.45, content_w * 0.25])
    meta_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), C_LIGHTGRAY),
        ("ROWPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.3, C_BORDER),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    story.append(meta_tbl)
    story.append(Spacer(1, 8 * mm))

    # Gauge + exec summary side by side
    gauge_w = 170
    sum_w = content_w - gauge_w - 8 * mm
    gauge = ScoreGauge(score, width=gauge_w, height=110)

    sum_para = Paragraph(summary, S["execsum"])
    sum_inner = Table(
        [[sum_para]],
        colWidths=[sum_w]
    )
    sum_inner.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), C_LIGHTGRAY),
        ("BOX", (0, 0), (-1, -1), 0.5, C_BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))

    hero_tbl = Table(
        [[gauge, sum_inner]],
        colWidths=[gauge_w, sum_w + 8 * mm]
    )
    hero_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (0, 0), 0),
        ("RIGHTPADDING", (0, 0), (0, 0), 8 * mm),
    ]))
    story.append(hero_tbl)
    story.append(PageBreak())

    # ── PAGE 2: Score Breakdown ───────────────────────────────────────────────
    story.append(SectionHeader("Score Breakdown", width=content_w))
    story.append(Spacer(1, 6 * mm))

    bars = CategoryBars(cats, width=content_w, height=len(cats) * 28)
    story.append(bars)
    story.append(Spacer(1, 6 * mm))

    # Score table
    tbl_data = [
        [Paragraph("<b>Category</b>", S["label"]),
         Paragraph("<b>Score</b>", S["label"]),
         Paragraph("<b>Weight</b>", S["label"]),
         Paragraph("<b>Status</b>", S["label"])],
    ]
    for name, d in cats.items():
        sc = d["score"]
        wt = d.get("weight", "—")
        if sc >= 80:   status, col = "Strong", C_GREEN
        elif sc >= 60: status, col = "Solid", C_BLUE
        elif sc >= 40: status, col = "Needs Work", C_AMBER
        else:          status, col = "Critical", C_RED

        badge = Table(
            [[Paragraph(f"<font color='white'><b>{status}</b></font>", S["label"])]],
            colWidths=[55]
        )
        badge.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), col),
            ("ROWPADDING", (0, 0), (-1, -1), 3),
            ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ]))

        tbl_data.append([
            Paragraph(name, S["body"]),
            Paragraph(f"<b>{sc}/100</b>", S["body"]),
            Paragraph(wt, S["body"]),
            badge,
        ])

    score_tbl = Table(tbl_data, colWidths=[content_w * 0.42, 60, 55, 65])
    score_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), C_NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), C_WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [C_WHITE, C_LIGHTGRAY]),
        ("GRID", (0, 0), (-1, -1), 0.3, C_BORDER),
        ("ROWPADDING", (0, 0), (-1, -1), 7),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    story.append(score_tbl)
    story.append(PageBreak())

    # ── PAGE 3: Key Findings ──────────────────────────────────────────────────
    story.append(SectionHeader("Key Findings", width=content_w))
    story.append(Spacer(1, 5 * mm))

    find_data = [
        [Paragraph("<b>Severity</b>", S["label"]),
         Paragraph("<b>Finding</b>", S["label"])],
    ]
    for f in findings:
        sev = f.get("severity", "Low")
        col = severity_color(sev)
        badge = Table(
            [[Paragraph(f"<font color='white'><b>{sev}</b></font>", S["label"])]],
            colWidths=[52]
        )
        badge.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), col),
            ("ROWPADDING", (0, 0), (-1, -1), 4),
            ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ]))
        find_data.append([badge, Paragraph(f.get("finding", ""), S["body"])])

    find_tbl = Table(find_data, colWidths=[58, content_w - 58])
    find_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), C_NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), C_WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [C_WHITE, C_LIGHTGRAY]),
        ("GRID", (0, 0), (-1, -1), 0.3, C_BORDER),
        ("ROWPADDING", (0, 0), (-1, -1), 7),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(find_tbl)
    story.append(PageBreak())

    # ── PAGE 4: Action Plan ───────────────────────────────────────────────────
    story.append(SectionHeader("Prioritised Action Plan", width=content_w))
    story.append(Spacer(1, 5 * mm))

    def action_block(title, items, accent):
        block = []
        header = Table(
            [[Paragraph(f"<b>{title}</b>", S["label"])]],
            colWidths=[content_w]
        )
        header.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), accent),
            ("TEXTCOLOR", (0, 0), (-1, -1), C_WHITE),
            ("ROWPADDING", (0, 0), (-1, -1), 7),
            ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ]))
        block.append(header)
        rows = []
        for i, item in enumerate(items, 1):
            rows.append([
                Paragraph(f"<b>{i}</b>", S["label"]),
                Paragraph(item, S["action"])
            ])
        inner = Table(rows, colWidths=[18, content_w - 18])
        inner.setStyle(TableStyle([
            ("ROWBACKGROUNDS", (0, 0), (-1, -1), [C_WHITE, C_LIGHTGRAY]),
            ("GRID", (0, 0), (-1, -1), 0.3, C_BORDER),
            ("ROWPADDING", (0, 0), (-1, -1), 7),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("ALIGN", (0, 0), (0, -1), "CENTER"),
        ]))
        block.append(inner)
        block.append(Spacer(1, 4 * mm))
        return block

    story.extend(action_block("Quick Wins — This Week", quick, C_GREEN))
    story.extend(action_block("Medium Term — 1 to 3 Months", medium, C_BLUE))
    story.extend(action_block("Strategic — 3 to 6 Months", strategic, C_NAVY))

    # ── PAGE 5: Competitive Landscape (optional) ──────────────────────────────
    if competitors:
        story.append(PageBreak())
        story.append(SectionHeader("Competitive Landscape", width=content_w))
        story.append(Spacer(1, 5 * mm))

        comp_names = [brand] + [c["name"] for c in competitors[:3]]
        col_w = content_w / (len(comp_names) + 1)
        header_row = [Paragraph("<b>Factor</b>", S["label"])]
        header_row += [Paragraph(f"<b>{n}</b>", S["label"]) for n in comp_names]

        rows = [header_row]
        factors = ["positioning", "pricing", "social_proof", "content"]
        labels  = ["Positioning", "Pricing", "Social Proof", "Content"]

        for factor, label in zip(factors, labels):
            row = [Paragraph(label, S["label"])]
            # client column first
            row.append(Paragraph("See audit findings", S["body"]))
            for comp in competitors[:3]:
                row.append(Paragraph(comp.get(factor, "—"), S["body"]))
            rows.append(row)

        col_widths = [80] + [int((content_w - 80) / len(comp_names))] * len(comp_names)
        comp_tbl = Table(rows, colWidths=col_widths)
        comp_tbl.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), C_NAVY),
            ("TEXTCOLOR", (0, 0), (-1, 0), C_WHITE),
            ("BACKGROUND", (1, 1), (1, -1), colors.HexColor("#EDF4FF")),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [C_WHITE, C_LIGHTGRAY]),
            ("GRID", (0, 0), (-1, -1), 0.3, C_BORDER),
            ("ROWPADDING", (0, 0), (-1, -1), 7),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]))
        story.append(comp_tbl)

    # ── Final Page: Methodology ───────────────────────────────────────────────
    story.append(PageBreak())
    story.append(SectionHeader("Methodology & Scoring", width=content_w))
    story.append(Spacer(1, 5 * mm))

    meth_text = """
This audit evaluates six dimensions of marketing effectiveness, each weighted according to its typical impact on lead generation and revenue for professional services firms. Scores are assessed on a 0–100 scale based on the presence, quality, and effectiveness of each element.
"""
    story.append(Paragraph(meth_text.strip(), S["body"]))
    story.append(Spacer(1, 4 * mm))

    meth_data = [
        [Paragraph("<b>Category</b>", S["label"]),
         Paragraph("<b>Weight</b>", S["label"]),
         Paragraph("<b>What Is Measured</b>", S["label"])],
        [Paragraph("Content & Messaging", S["body"]), Paragraph("25%", S["body"]),
         Paragraph("Headline clarity, value proposition, copy persuasion, social proof, brand voice", S["body"])],
        [Paragraph("Conversion Optimization", S["body"]), Paragraph("20%", S["body"]),
         Paragraph("CTA placement and clarity, form friction, trust signals at conversion points, mobile UX", S["body"])],
        [Paragraph("SEO & Discoverability", S["body"]), Paragraph("20%", S["body"]),
         Paragraph("Title tags, meta descriptions, URL structure, schema markup, local SEO, page speed", S["body"])],
        [Paragraph("Competitive Positioning", S["body"]), Paragraph("15%", S["body"]),
         Paragraph("Differentiation messaging, market positioning, competitor awareness, pricing clarity", S["body"])],
        [Paragraph("Brand & Trust", S["body"]), Paragraph("10%", S["body"]),
         Paragraph("Design quality, professional signals, credentials, recency indicators", S["body"])],
        [Paragraph("Growth & Strategy", S["body"]), Paragraph("10%", S["body"]),
         Paragraph("Lead capture, content strategy, email marketing, social presence, referral channels", S["body"])],
    ]
    meth_tbl = Table(meth_data, colWidths=[120, 45, content_w - 165])
    meth_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), C_NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), C_WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [C_WHITE, C_LIGHTGRAY]),
        ("GRID", (0, 0), (-1, -1), 0.3, C_BORDER),
        ("ROWPADDING", (0, 0), (-1, -1), 7),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(meth_tbl)
    story.append(Spacer(1, 6 * mm))

    score_legend = [
        [Paragraph("<b>Score</b>", S["label"]), Paragraph("<b>Grade</b>", S["label"]),
         Paragraph("<b>Interpretation</b>", S["label"])],
        [Paragraph("85–100", S["body"]), Paragraph("A", S["body"]), Paragraph("Excellent — minor optimisations only", S["body"])],
        [Paragraph("70–84",  S["body"]), Paragraph("B", S["body"]), Paragraph("Good — clear opportunities for improvement", S["body"])],
        [Paragraph("55–69",  S["body"]), Paragraph("C", S["body"]), Paragraph("Average — significant gaps to address", S["body"])],
        [Paragraph("40–54",  S["body"]), Paragraph("D", S["body"]), Paragraph("Below average — major overhaul needed", S["body"])],
        [Paragraph("0–39",   S["body"]), Paragraph("F", S["body"]), Paragraph("Critical — fundamental marketing issues", S["body"])],
    ]
    leg_tbl = Table(score_legend, colWidths=[70, 45, content_w - 115])
    leg_tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), C_NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), C_WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [C_WHITE, C_LIGHTGRAY]),
        ("GRID", (0, 0), (-1, -1), 0.3, C_BORDER),
        ("ROWPADDING", (0, 0), (-1, -1), 7),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    story.append(leg_tbl)
    story.append(Spacer(1, 8 * mm))

    story.append(Paragraph(
        "Generated by AI Marketing Suite for Claude Code · Confidential — prepared for internal and client use only.",
        S["small"]
    ))

    doc.build(story, onFirstPage=add_footer, onLaterPages=add_footer)
    print(f"✓ PDF generated: {output_path}")


# ── Entry point ───────────────────────────────────────────────────────────────
SAMPLE_DATA = {
    "url": "https://example.com",
    "date": datetime.today().strftime("%B %d, %Y"),
    "brand_name": "Example Co",
    "overall_score": 52,
    "executive_summary": "Example Co scores 52/100 — a below-average result driven by weak conversion architecture and absent SEO infrastructure. The brand has strong product fundamentals but fails to communicate them clearly to first-time visitors. Implementing the quick wins in this report is projected to lift qualified leads by 35–60% within 90 days.",
    "categories": {
        "Content & Messaging":     {"score": 58, "weight": "25%"},
        "Conversion Optimization": {"score": 44, "weight": "20%"},
        "SEO & Discoverability":   {"score": 61, "weight": "20%"},
        "Competitive Positioning": {"score": 40, "weight": "15%"},
        "Brand & Trust":           {"score": 65, "weight": "10%"},
        "Growth & Strategy":       {"score": 48, "weight": "10%"},
    },
    "findings": [
        {"severity": "Critical", "finding": "Homepage headline is generic — does not pass the 5-second test"},
        {"severity": "High",     "finding": "No primary CTA above the fold on the homepage"},
        {"severity": "High",     "finding": "Missing meta descriptions on all key landing pages"},
        {"severity": "Medium",   "finding": "No social proof near the primary conversion point"},
        {"severity": "Low",      "finding": "Open Graph tags missing — broken social share previews"},
    ],
    "quick_wins": [
        "Rewrite the homepage headline to lead with the primary benefit, not the company name",
        "Add a high-contrast CTA button above the fold with specific action text",
        "Add meta descriptions to the 5 highest-traffic pages",
    ],
    "medium_term": [
        "Build a comparison landing page targeting competitor alternative searches",
        "Implement a lead magnet with email capture on the homepage",
        "Set up Google Analytics 4 with conversion goal tracking",
    ],
    "strategic": [
        "Launch a content marketing programme targeting 4 long-tail articles per month",
        "Build a structured referral partner network",
        "Develop a tiered pricing page with clear value anchoring",
    ],
    "competitors": [
        {"name": "Competitor A", "positioning": "Enterprise-focused, brand recognition", "pricing": "Premium, contact for quote", "social_proof": "Case studies, G2 reviews", "content": "Heavy blog, weekly newsletter"},
        {"name": "Competitor B", "positioning": "SMB-focused, self-serve", "pricing": "Transparent, tiered pricing page", "social_proof": "User count, testimonials", "content": "SEO-driven content hub"},
    ],
}

if __name__ == "__main__":
    if len(sys.argv) >= 2:
        with open(sys.argv[1]) as f:
            data = json.load(f)
        out = sys.argv[2] if len(sys.argv) >= 3 else "MARKETING-REPORT.pdf"
    else:
        data = SAMPLE_DATA
        out = "MARKETING-REPORT-sample.pdf"

    build_pdf(data, out)
