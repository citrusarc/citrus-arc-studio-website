"use client";

import Link from "next/link";
import Image from "next/image";
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

// // NEW: form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Enter valid phone number"),
  countryCode: z.string().min(1, "Select country code"),
  budget: z.string().min(1, "Select your budget"),
  project: z.string().max(120, "Max 120 characters"),
});

export default function GetInTouchPage() {
  // // NEW: useForm setup
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      countryCode: "",
      budget: "",
      project: "",
    },
  });

  // // NEW: submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
  }

  return (
    <section className="relative z-0 flex p-4 sm:p-8 -mt-30 sm:-mt-46 items-center justify-center">
      <div className="relative flex flex-col sm:flex-row p-4 sm:p-8 pt-24 gap-8 w-full min-h-[94dvh] items-start sm:items-center rounded-2xl overflow-hidden text-white bg-black">
        <div className="absolute inset-0 bg-fixed bg-[linear-gradient(rgba(255,255,255,0.1)_1.4px,transparent_1.4px),linear-gradient(to_right,rgba(255,255,255,0.1)_1.4px,transparent_1.4px)] bg-[size:40px_40px]" />

        {/* LEFT SIDE */}
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
              <span>Number 3</span>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="relative z-10 flex flex-col w-full max-w-6xl">
          <div className="relative p-6 w-full rounded-2xl overflow-hidden text-black bg-white">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Full Name */}
                {/* // // Changed to FormField */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone with country code */}
                {/* // // Added grid + Select for code */}
                <div className="grid grid-cols-3 gap-3">
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country Code</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="+60" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="+1">+1 (US)</SelectItem>
                              <SelectItem value="+44">+44 (UK)</SelectItem>
                              <SelectItem value="+60">+60 (MY)</SelectItem>
                              <SelectItem value="+61">+61 (AU)</SelectItem>
                              <SelectItem value="+65">+65 (SG)</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Budget */}
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1500">RM 1,500</SelectItem>
                            <SelectItem value="5000">RM 5,000</SelectItem>
                            <SelectItem value="10000">RM 10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Project description */}
                {/* // // Added Textarea limited to 120 chars */}
                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About Your Project</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your project (max 120 chars)"
                          {...field}
                          maxLength={120}
                        />
                      </FormControl>
                      <FormDescription>
                        Max 120 characters. Remaining:{" "}
                        {120 - field.value.length}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
