"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ContactFormData = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  eMailAddress: string;
  subject: string;
  message: string;
};

const inputClassName =
  "h-10 w-full rounded-lg border border-navy/30 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40";

const labelClassName = "mb-1 ml-1 text-sm font-medium text-foreground";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        contactNumber: "",
        eMailAddress: "",
        subject: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="firstName" className={labelClassName}>
            First Name
          </label>
          <input
            id="firstName"
            {...register("firstName", { required: true, maxLength: 20 })}
            placeholder="First Name*"
            className={cn(inputClassName, !errors.firstName && "mb-0")}
          />
          {errors.firstName && (
            <small className="mt-1 h-6 text-xs text-destructive">
              This field is required
            </small>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className={labelClassName}>
            Last Name
          </label>
          <input
            id="lastName"
            {...register("lastName", { required: true, maxLength: 20 })}
            placeholder="Last Name*"
            className={inputClassName}
          />
          {errors.lastName && (
            <small className="mt-1 h-6 text-xs text-destructive">
              This field is required
            </small>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="contactNumber" className={labelClassName}>
            Contact Number
          </label>
          <input
            id="contactNumber"
            {...register("contactNumber", {
              required: true,
              maxLength: 11,
              minLength: 7,
              pattern: /^[0-9]+$/,
            })}
            placeholder="Contact Number*"
            className={inputClassName}
          />
          {errors.contactNumber && (
            <small className="mt-1 h-6 text-xs text-destructive">
              Enter a valid contact number
            </small>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="eMailAddress" className={labelClassName}>
            E-Mail Address
          </label>
          <input
            id="eMailAddress"
            type="email"
            {...register("eMailAddress", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
            placeholder="E-mail Address*"
            className={inputClassName}
          />
          {errors.eMailAddress && (
            <small className="mt-1 h-6 text-xs text-destructive">
              Enter a valid E-mail Address
            </small>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="subject" className={labelClassName}>
          Subject
        </label>
        <input
          id="subject"
          {...register("subject", { required: true })}
          placeholder="Subject*"
          className={inputClassName}
        />
        {errors.subject && (
          <small className="mt-1 h-6 text-xs text-destructive">
            This field is required
          </small>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          {...register("message", { required: true })}
          placeholder="Message*"
          rows={6}
          className={cn(
            inputClassName,
            "h-auto resize-none py-3"
          )}
        />
        {errors.message && (
          <small className="mt-1 h-6 text-xs text-destructive">
            This field is required
          </small>
        )}
      </div>

      <div className="flex justify-center pt-2">
        <Button type="submit" size="lg" className="bg-navy text-cream hover:bg-navy/90">
          Submit
        </Button>
      </div>
    </form>
  );
}
