import AdminPage from "./Admin";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin page of the Next.js",
};

export default function Admin() {
  return <AdminPage />
}