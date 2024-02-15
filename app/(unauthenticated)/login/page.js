import Spinner from "@/components/Global/Spinner/Spinner";
import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

import {neobrutalism} from "@clerk/themes";

export default function Home() {

  return (
    <main className="flex flex-1 justify-center items-center h-[100%] bg-[url('/images/netflix-banner.jpg')]">
      <div className="absolute h-full w-full bg-gradient-to-r from-black to-gray-900 opacity-60 z-[10]">

      </div>
      <div className="z-[100]">
        <ClerkLoading>
          <Spinner />
        </ClerkLoading>
        <ClerkLoaded>
          <SignIn appearance={{
            baseTheme: neobrutalism,
          }} />
        </ClerkLoaded>
      </div>
    </main>
  );
  
}
