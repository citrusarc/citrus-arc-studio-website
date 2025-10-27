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
        <div style="display:flex; flex-direction:column; gap:4px;"> 
          <p style="font-size:14px; color:#a3a3a3; margin:0;">Full Name</p> 
          <p style="font-size:16px; margin:0;">${fullName}</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:4px;">
          <p style="font-size:14px; color:#a3a3a3; margin:0;">Email</p>
          <p style="font-size:16px; margin:0;">${email}</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:4px;">
          <p style="font-size:14px; color:#a3a3a3; margin:0;">Phone Number</p>
          <p style="font-size:16px; margin:0;">${countryCode}${phone}</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:4px;">
          <p style="font-size:14px; color:#a3a3a3; margin:0;">Budget</p>
          <p style="font-size:16px; margin:0;">${budget}</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:4px;">
          <p style="font-size:14px; color:#a3a3a3; margin:0;">Describe Your Project</p>
          <p style="font-size:16px; margin:0;">${project}</p>
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="color:#a3a3a3; text-align:center; padding:20px; font-size:14px;">
        <p style="margin:4px 0;">
        <a href="https://citrusarc.studio" style="color:#a3a3a3;">citrusarc.com</a>
      </p>
      <p style="margin:4px 0;">© ${new Date().getFullYear()} Citrus Arc Studio. All rights reserved.</p>
      
    </div>
  </div>
</div>
  `;
}
