"use client";
import { links } from "@/data/links";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { GitHub, Linkedin, Mail, MapPin, Send } from "react-feather";
import { Button } from "./Button";
import { FormData } from "./EmailTemplate";

function ContactInfo() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    const res = await fetch("api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      toast.error("Sorry! There was an error.");
    }

    toast.success("Message sent successfully!");

    reset();
  }

  return (
    <div className="flex flex-col mx-auto max-w-[600px] lg:max-w-none lg:grid grid-cols-[3fr_2fr] grid-rows-[1fr-auto] mt-10 gap-10">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-neutral-950 row-span-2 border border-border rounded-md p-4">
        <h4 className="text-lg font-medium text-white">Send a message</h4>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <input
            {...register("fullName", { required: true })}
            type="text"
            placeholder="Full Name"
            className="bg-neutral-900 col-span-2 px-4 py-2 rounded-md"
          />
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="bg-neutral-900 px-4 max-[350px]:col-span-2 py-2 rounded-md"
          />
          <input
            {...register("phone")}
            type="phone"
            placeholder="Phone Number (optional)"
            className="bg-neutral-900 px-4 max-[350px]:col-span-2 py-2 rounded-md"
          />

          <textarea
            {...register("message", { required: true })}
            className="bg-neutral-900 px-4 py-2 rounded-md col-span-2 resize-none"
            placeholder="Message"
            rows={5}
          />
        </div>
        <Button variant="secondary" className="mt-4" icon={Send} size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending... " : "Send Message"}
        </Button>
      </form>
      <div className="bg-neutral-950 border border-border flex flex-col items-start rounded-md p-4">
        <h4 className="text-lg font-medium text-white">Contact Information</h4>

        <span className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 mt-4">
          <span className="bg-primary/10 p-2 row-span-2 rounded-md text-primary">
            <Mail size={25} />
          </span>
          <h5 className="text-sm text-neutral-500 font-medium">Email</h5>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </span>

        <span className="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-4 mt-4">
          <span className="bg-primary/10 p-2 row-span-2 rounded-md text-primary">
            <MapPin size={25} />
          </span>
          <h5 className="text-sm text-neutral-500 font-medium">Location</h5>
          <span>Naples, Italy IT</span>
        </span>
      </div>
      <div className="bg-neutral-950 border border-border flex flex-col items-start rounded-md p-4">
        <h4 className="text-lg font-medium text-white">Connect with me</h4>
        <div className="flex mt-4 gap-4">
          <a target="blank" href={links.github} className="p-2 bg-neutral-900 rounded-md">
            <GitHub size={22} />
          </a>
          <a target="blank" href={links.linkedin} className="p-2 bg-neutral-900 rounded-md">
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

export { ContactInfo };
