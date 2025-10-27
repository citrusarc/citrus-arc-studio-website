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
  <div style="background-color:#ea580c; padding:24px;">
  <div style="max-width:600px; margin:0 auto; font-family:Arial,sans-serif; color:#ffffff; background:#000; border-radius:16px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
    <div style="padding:24px;">
      <!-- Logo -->
      <img src="https://www.citrusarc.studio/Images/brand-logo.png" 
           alt="Citrus Arc Studio Logo" 
           style="width:200px; height:auto; display:block; margin-bottom:16px;" />

      <!-- Header -->
      <h2 style="margin:0 0 8px; font-size:22px; font-weight:600; color:#ffffff;">Thanks for reaching out!</h2> 

      <!-- Intro paragraph -->
      <p style="margin:0 0 16px; font-size:14px; color:#a3a3a3; line-height:1.5;">
        We’ve received your message and we’re excited to learn more about your project.<br />
        Here’s a quick summary of what you sent us:
      </p>

      <!-- Glass effect container -->
      <div style="
          display:flex; 
          flex-direction:column; 
          gap:12px; 
          border-radius:12px; 
          background: rgba(255, 255, 255, 0.2); 
          backdrop-filter: blur(10px); 
          -webkit-backdrop-filter: blur(10px); 
          border: 1px solid rgba(255,255,255,0.15); 
          padding:16px;
        "> 

        <!-- Individual field -->
       <table style="width:100%; border-collapse:collapse; font-size:14px;">
  <tbody>
    <tr >
      <td style="padding:8px; color:#a3a3a3; width:35%;">Full Name</td>
      <td style="padding:8px; color:#ffffff; font-size:16px; font-weight:500;">${fullName}</td>
    </tr>
    <tr >
      <td style="padding:8px; color:#a3a3a3;">Email</td>
      <td style="padding:8px; color:#ffffff; font-size:16px; font-weight:500;">${email}</td>
    </tr>
    <tr >
      <td style="padding:8px; color:#a3a3a3;">Phone Number</td>
      <td style="padding:8px; color:#ffffff; font-size:16px; font-weight:500;">${countryCode}${phone}</td>
    </tr>
    <tr >
      <td style="padding:8px; color:#a3a3a3;">Budget</td>
      <td style="padding:8px; color:#ffffff; font-size:16px; font-weight:500;">${budget}</td>
    </tr>
    <tr >
      <td style="padding:8px; color:#a3a3a3; vertical-align:top;">Describe Your Project</td>
      <td style="padding:8px; color:#ffffff; font-size:16px; font-weight:500;">${project}</td>
    </tr>
  </tbody>
</table>

    </div>

    <!-- Footer -->
    <div style="color:#a3a3a3; text-align:center; padding:20px; font-size:14px;">
        <p style="margin:4px 0;">
        <a href="https://citrusarc.studio" style="color:#a3a3a3;">citrusarc.studio</a>
      </p>
      <p style="margin:4px 0;">© ${new Date().getFullYear()} Citrus Arc Studio. All rights reserved.</p>
      
    </div>
  </div>
</div>
  `;
}
