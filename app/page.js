import Image from "next/image";

import Header from "@/components/Global/Header/Header";
import Hero from "@/components/HomeGuest/Hero/Hero";
import HomeGuest from "@/containers/HomeGuest/HomeGuest";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeGuest />
    </main>
  );
}
