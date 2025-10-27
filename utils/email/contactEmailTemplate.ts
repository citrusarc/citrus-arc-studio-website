import { ContactEmailTemplateProps } from "@/types";

export function contactEmailTemplate({
  fullName,
  email,
  phone,
  countryCode,
  budget,
  project,
  fileName,
}: ContactEmailTemplateProps) {
  return `
  <div style="background-color:#f4f4f4; padding:24px;">
    <div style="max-width:600px; margin:0 auto; font-family:Arial,sans-serif; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
      <div style="padding:24px;">
        <h2 style="font-size:22px; font-weight:600; margin:0 0 12px;">New Contact Form Submission</h2>
        <p style="margin:0 0 8px; font-size:14px; color:#333;">
          You have received a new message from the Get in Touch form.
        </p>
        <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:14px;">
          <tbody>
            <tr style="background-color:#ffffff;">
              <td style="padding:8px; font-weight:bold; width:40%;">Full Name</td>
              <td style="padding:8px;">${fullName}</td>
            </tr>
            <tr style="background-color:#f9f9f9;">
              <td style="padding:8px; font-weight:bold;">Email</td>
              <td style="padding:8px;">${email}</td>
            </tr>
            <tr style="background-color:#ffffff;">
              <td style="padding:8px; font-weight:bold;">Phone</td>
              <td style="padding:8px;">${countryCode}${phone}</td>
            </tr>
            <tr style="background-color:#f9f9f9;">
              <td style="padding:8px; font-weight:bold;">Budget</td>
              <td style="padding:8px;">${budget}</td>
            </tr>
            <tr style="background-color:#ffffff;">
              <td style="padding:8px; font-weight:bold;">Project Description</td>
              <td style="padding:8px;">${project}</td>
            </tr>
            <tr style="background-color:#f9f9f9;">
              <td style="padding:8px; font-weight:bold;">Attached File</td>
              <td style="padding:8px;">${fileName || "None"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background:#1d4ed8; color:#fff; text-align:center; padding:20px; font-size:14px;">
        <p style="margin:4px 0;">© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </div>
  `;
}
