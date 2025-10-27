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

    // Get form data
    const formData = await req.formData();

    // Extract fields
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const countryCode = formData.get("countryCode") as string;
    const budget = formData.get("budget") as string;
    const project = formData.get("project") as string;
    const file = formData.get("file") as File | null;

    // Validate data
    formSchema.parse({
      fullName,
      email,
      phone,
      countryCode,
      budget,
      project,
      fileName: file?.name,
    });

    const attachments = file
      ? [
          {
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
          },
        ]
      : [];

    // Send email
    await transporter.sendMail({
      from: `"Citrus Arc Studio" <${process.env.EMAIL_USER}>`,
      to: email,
      bcc: process.env.ADMIN_EMAIL,
      subject: "Your project inquiry is on its way to our team",
      html: contactEmailTemplate({
        fullName,
        email,
        phone,
        countryCode,
        budget,
        project,
        fileName: file?.name,
      }),
      attachments,
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
