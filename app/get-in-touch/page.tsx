"use client";

import { CheckCircleSolid } from "iconoir-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ReactCountryFlag from "react-country-flag";
import { Rocket } from "iconoir-react";
import { useState } from "react";

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
  file: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof FileList, "Invalid file input"),
});

export default function GetInTouchPage() {
  const [submitting, setSubmitting] = useState(false);
  const [, setErrorMessage] = useState<string | null>(null);
  const [, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      countryCode: "+60",
      budget: "",
      project: "",
      file: undefined,
    },
  });

  const {
    formState: { errors },
  } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("countryCode", values.countryCode);
      formData.append("budget", values.budget);
      formData.append("project", values.project);
      if (values.file?.[0]) {
        formData.append("file", values.file[0]);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSuccessMessage("Your message has been sent successfully!");
      form.reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Error submitting form";
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative z-0 flex p-4 sm:p-8 -mt-30 sm:-mt-46 items-center justify-center">
      <div className="relative flex flex-col sm:flex-row p-4 sm:p-8 pt-24 gap-8 w-full min-h-[94dvh] items-start sm:items-center rounded-2xl overflow-hidden text-white bg-black">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(rgba(255,255,255,0.1)_1.4px,transparent_1.4px),linear-gradient(to_right,rgba(255,255,255,0.1)_1.4px,transparent_1.4px)] bg-[size:40px_40px]" />

        <div className="relative z-10 flex flex-col gap-8 max-w-2xl">
          <h1 className="text-5xl sm:text-[120px] font-semibold text-white">
            LET&apos;S TALK
          </h1>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-xl sm:text-2xl">
              <CheckCircleSolid className="text-orange-500 w-7 h-7" />
              <span>Respond within 24 hours.</span>
            </li>
            <li className="flex items-center gap-4 text-xl sm:text-2xl">
              <CheckCircleSolid className="text-orange-500 w-7 h-7" />
              <span>Sign NDA if needed.</span>
            </li>
            <li className="flex items-center gap-4 text-xl sm:text-2xl">
              <CheckCircleSolid className="text-orange-500 w-7 h-7" />
              <span>Kickstart project.</span>
            </li>
          </ul>
        </div>

        <div className="relative z-10 flex flex-col w-full max-w-6xl">
          <div className="relative p-4 sm:p-8 w-full rounded-2xl overflow-hidden text-black bg-white">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-8"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel
                          className={`${
                            errors.fullName
                              ? "text-red-500"
                              : "text-neutral-400"
                          }`}
                        >
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className={`w-full h-10 shadow-none ${
                              errors.fullName
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel
                          className={`${
                            errors.email ? "text-red-500" : "text-neutral-400"
                          }`}
                        >
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@email.com"
                            {...field}
                            className={`w-full h-10 shadow-none ${
                              errors.email
                                ? "border-red-500 focus-visible:ring-red-500"
                                : ""
                            }`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                  <div className="space-y-1 flex-1">
                    <h2
                      className={`text-sm font-medium ${
                        errors.phone || errors.countryCode
                          ? "text-red-500"
                          : "text-neutral-400"
                      }`}
                    >
                      Phone Number
                    </h2>
                    <div className="flex w-full gap-2">
                      <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Select
                                defaultValue="+60"
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger
                                  className={`!h-10 shadow-none ${
                                    errors.countryCode
                                      ? "border-red-500 focus-visible:ring-red-500"
                                      : ""
                                  }`}
                                >
                                  <SelectValue placeholder="+60">
                                    {field.value}
                                  </SelectValue>
                                </SelectTrigger>
                                <SelectContent align="start">
                                  <SelectItem value="+60" className="h-10">
                                    <ReactCountryFlag
                                      countryCode="MY"
                                      svg
                                      style={{ width: "20px", height: "20px" }}
                                    />
                                    <span>Malaysia (+60)</span>
                                  </SelectItem>
                                  <SelectItem value="+62" className="h-10">
                                    <ReactCountryFlag
                                      countryCode="ID"
                                      svg
                                      style={{ width: "20px", height: "20px" }}
                                    />
                                    <span>Indonesia (+62)</span>
                                  </SelectItem>
                                  <SelectItem value="+65" className="h-10">
                                    <ReactCountryFlag
                                      countryCode="SG"
                                      svg
                                      style={{ width: "20px", height: "20px" }}
                                    />
                                    <span>Singapore (+65)</span>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                placeholder="123456789"
                                {...field}
                                className={`w-full h-10 shadow-none ${
                                  errors.phone
                                    ? "border-red-500 focus-visible:ring-red-500"
                                    : ""
                                }`}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    {(errors.phone || errors.countryCode) && (
                      <p className="text-sm text-red-500 mt-2">
                        {errors.phone?.message || errors.countryCode?.message}
                      </p>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel
                          className={`${
                            errors.budget ? "text-red-500" : "text-neutral-400"
                          }`}
                        >
                          Budget
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              className={`w-full !h-10 shadow-none ${
                                errors.budget
                                  ? "border-red-500 focus-visible:ring-red-500"
                                  : ""
                              }`}
                            >
                              <SelectValue placeholder="Select your budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem
                                value="RM1,500 – RM4,999"
                                className="h-10"
                              >
                                RM1,500 – RM4,999
                              </SelectItem>
                              <SelectItem
                                value="RM5,000 – RM9,999"
                                className="h-10"
                              >
                                RM5,000 – RM9,999
                              </SelectItem>
                              <SelectItem
                                value="RM10,000 and above"
                                className="h-10"
                              >
                                RM10,000 and above
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={`${
                          errors.project ? "text-red-500" : "text-neutral-400"
                        }`}
                      >
                        Describe Your Project
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write about your project here..."
                          {...field}
                          maxLength={300}
                          className={`h-36 shadow-none ${
                            errors.project
                              ? "border-red-500 focus-visible:ring-red-500"
                              : ""
                          }`}
                        />
                      </FormControl>
                      <div className="flex items-center justify-between">
                        <div className="text-start">
                          <FormMessage />
                        </div>
                        <FormDescription className="text-end">
                          Remaining: {300 - field.value.length}
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => {
                    const file = field.value?.[0];
                    return (
                      <FormItem className="flex-1">
                        <FormLabel className="text-neutral-400">
                          Upload File (Optional)
                        </FormLabel>
                        <FormControl>
                          {!file ? (
                            <Input
                              type="file"
                              accept="application/pdf"
                              onChange={(e) => {
                                const fileList = e.target.files;
                                field.onChange(fileList);
                              }}
                              className="h-10 w-full sm:w-64 -px-4 cursor-pointer border-transparent shadow-none text-neutral-400"
                            />
                          ) : (
                            <div className="flex h-10 items-center gap-2">
                              <span className="truncate max-w-[200px] text-neutral-400 ">
                                {file.name}
                              </span>
                              <button
                                type="button"
                                onClick={() => field.onChange(null)}
                                className="cursor-pointer text-sm text-red-500 hover:underline"
                              >
                                Remove
                              </button>
                            </div>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                <Button
                  type="submit"
                  disabled={submitting}
                  className={`group flex p-2 items-center justify-center h-16 w-full sm:w-64 rounded-full cursor-pointer border text-white hover:text-orange-600 border-transparent hover:border-orange-600 bg-orange-600 hover:bg-white ${
                    submitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <span className="mx-auto up-down-on-hover text-base font-semibold">
                    {submitting ? "SENDING..." : "SEND A MESSAGE"}
                  </span>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full text-orange-600 group-hover:text-white bg-white group-hover:bg-orange-600">
                    <Rocket className="!w-6 !sm:w-12 !h-6 !sm:h-12 up-down-on-hover transform rotate-90" />
                  </div>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
