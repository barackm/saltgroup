"use server";

import sgMail from "@sendgrid/mail";
import { render } from "@react-email/render";
import { RegistrationEmail } from "../emails/RegistrationEmail";
import { ContactEmail } from "../emails/ContactEmail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const ORGANIZER_EMAIL = process.env.ORGANIZER_EMAIL!;

export async function sendRegistrationEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  eventTitle: string;
  date: string;
  time: string;
  location: string;
}) {
  try {
    const emailHtml = await render(RegistrationEmail(data));

    const msg = {
      to: ORGANIZER_EMAIL,
      from: ORGANIZER_EMAIL,
      replyTo: data.email,
      subject: `Nouvelle inscription: ${data.eventTitle} - ${data.firstName} ${data.lastName}`,
      html: emailHtml,
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const emailHtml = await render(ContactEmail(data));

    const msg = {
      to: ORGANIZER_EMAIL,
      from: ORGANIZER_EMAIL,
      replyTo: data.email,
      subject: `Nouveau message de contact de ${data.name}`,
      html: emailHtml,
    };

    await sgMail.send(msg);

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);

    return { success: false, error: "Failed to send email" };
  }
}
