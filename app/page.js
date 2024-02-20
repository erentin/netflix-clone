import Image from "next/image";

import Header from "@/components/Global/Header/Header";
import Hero from "@/components/HomeGuest/Hero/Hero";
import HomeGuest from "@/containers/HomeGuest/HomeGuest";

import { redirect } from 'next/navigation'; 
import { auth } from '@clerk/nextjs';

export default function Home() {
  const {userId} = auth();

  if (userId) {
    redirect('/movies')
  }


  return (
    <main>
      <Header />
      <HomeGuest />
    </main>
  );
}
