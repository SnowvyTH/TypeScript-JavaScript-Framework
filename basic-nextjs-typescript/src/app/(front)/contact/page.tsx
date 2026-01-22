import ContactPage from './Contact'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page of the Next.js",
};

export default function Contact() {
  return <ContactPage />
}