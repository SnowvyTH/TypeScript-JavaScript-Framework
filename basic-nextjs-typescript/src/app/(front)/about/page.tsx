import AboutPage from './About'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page of the Next.js",
};

export default function About() {
  return <AboutPage />
}