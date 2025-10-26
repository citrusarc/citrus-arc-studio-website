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
import { Rocket } from "iconoir-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Enter valid phone number"),
  countryCode: z.string().min(1, "Select country code"),
  budget: z.string().min(1, "Select your budget"),
  project: z.string().max(120, "Max 120 characters"),
  file: z.any().refine((file) => file instanceof FileList),
});

export default function GetInTouchPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      countryCode: "",
      budget: "",
      project: "",
      file: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
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
              <span>Number 3</span>
            </li>
          </ul>
        </div>

        <div className="relative z-10 flex flex-col w-full max-w-6xl">
          <div className="relative p-6 w-full rounded-2xl overflow-hidden text-black bg-white">
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
                        <FormLabel className="text-neutral-400">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="w-full h-10 shadow-none"
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
                        <FormLabel className="text-neutral-400">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@email.com"
                            {...field}
                            className="w-full h-10 shadow-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                  <div className="space-y-1 flex-1">
                    <h2 className="text-sm font-medium text-neutral-400">
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
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <SelectTrigger className="!h-10 shadow-none">
                                  <SelectValue placeholder="+60" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="+60">+60 (MY)</SelectItem>
                                  <SelectItem value="+65">+65 (SG)</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
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
                                className=" w-full h-10 shadow-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="text-neutral-400">
                          Budget
                        </FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger className="w-full !h-10 shadow-none">
                              <SelectValue placeholder="Select your budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1500" className="h-10">
                                RM1,500
                              </SelectItem>
                              <SelectItem value="5000" className="h-10">
                                RM5,000
                              </SelectItem>
                              <SelectItem value="10000" className="h-10">
                                RM10,000+
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
                      <FormLabel className="text-neutral-400">
                        Describe Your Project
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write about your project here..."
                          {...field}
                          maxLength={120}
                          className="h-36 shadow-none"
                        />
                      </FormControl>
                      <FormDescription>
                        Remaining: {120 - field.value.length}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-neutral-400">
                        Upload File (Optional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          multiple
                          onChange={(e) => field.onChange(e.target.files)}
                          className="h-10 w-full sm:w-64 -px-4 cursor-pointer border-transparent shadow-none text-neutral-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="group flex p-2 items-center justify-center h-16 w-full sm:w-64 rounded-full cursor-pointer border text-white hover:text-orange-600 border-transparent hover:border-orange-600 bg-orange-600 hover:bg-white"
                >
                  <span className="mx-auto up-down-on-hover text-base font-semibold">
                    SUBMIT
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
