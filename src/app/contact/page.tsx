"use client";
import React from "react";
import Contact from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SALT Events",
  description:
    "Get in touch with SALT Events for premium event planning services. We're here to help create your perfect event.",
};

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default ContactPage;
