"use server";

export async function submitInquiry(formData: FormData) {
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    companyName: formData.get("companyName"),
    companySize: formData.get("companySize"),
    sector: formData.get("sector"),
    brief: formData.get("brief"),
  };

  // In a real application, you would use a service like Resend, Nodemailer, or SendGrid
  // For now, we will log the data and simulate a successful submission
  console.log("Form Submission Received:", data);

  // Formatting the data into a table-like string for the email
  const tableFormat = `
    New Market Research Inquiry
    ----------------------------
    First Name:   ${data.firstName}
    Last Name:    ${data.lastName}
    Email:        ${data.email}
    Company:      ${data.companyName}
    Size:         ${data.companySize}
    Sector:       ${data.sector}
    Brief:        ${data.brief}
    ----------------------------
  `;

  console.log("Email to info@seokaneinc.co.za:\n", tableFormat);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
