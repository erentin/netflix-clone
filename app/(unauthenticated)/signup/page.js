import { SignUp } from "@clerk/nextjs";

import {neobrutalism} from "@clerk/themes";

export default function Home() {
  return (
    <main className="flex h-full justify-center items-center bg-[url('/images/netflix-banner.jpg')]">
      <div className="absolute h-full w-full bg-gradient-to-r from-black to-gray-900 opacity-60 z-[10]"></div>

      <div className="z-[100]">
        <SignUp appearance={{
            baseTheme: neobrutalism,
          }} />
      </div>
    </main>
  );
}
