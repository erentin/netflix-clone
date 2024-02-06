import Spinner from "@/components/Global/Spinner/Spinner";
import { SignIn, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

import {neobrutalism} from "@clerk/themes";

export default function Home() {

  return (
    <main className="flex flex-1 justify-center items-center h-[100%]">
      <ClerkLoading>
        <Spinner />
      </ClerkLoading>
      <ClerkLoaded>
        <SignIn appearance={{
          baseTheme: neobrutalism,
        }} />
      </ClerkLoaded>
    </main>
  );
  
}
