import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Global/Header/Header";

export default function UnauthenticatedLayout({ children }) {
  return (
    <section className="flex-col h-full">
        <Header isLoginPage={true} />
        {children}
    </section>
   
  );
}
