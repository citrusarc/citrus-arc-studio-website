import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/utils/email";
import { contactEmailTemplate } from "@/utils/email/contactEmailTemplate";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Enter valid phone number"),
  countryCode: z.string().min(1, "Select country code"),
  budget: z.string().min(1, "Select your budget"),
  project: z
    .string()
    .min(10, "Describe your project")
    .max(300, "Max 300 characters"),
  fileName: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.ADMIN_EMAIL
    ) {
      throw new Error(
        "Missing email configuration. Please check environment variables."
      );
    }

    const body = await req.json();
    const parsedData = formSchema.parse(body);

    const { fullName, email, phone, countryCode, budget, project, fileName } =
      parsedData;

    // Send email
    await transporter.sendMail({
      from: `"Your Company Name" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      cc: email,
      subject: "New Contact Form Submission",
      html: contactEmailTemplate({
        fullName,
        email,
        phone,
        countryCode,
        budget,
        project,
        fileName,
      }),
    });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Form submission error:", err);
    const message =
      err instanceof z.ZodError
        ? err.issues.map((e) => e.message).join(", ")
        : err instanceof Error
        ? err.message
        : "Failed to process form submission";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
