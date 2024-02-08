import { SignUp } from "@clerk/nextjs";

import {neobrutalism} from "@clerk/themes";

export default function Home() {
  return (
    <main className="flex h-full justify-center items-center">
      <SignUp appearance={{
          baseTheme: neobrutalism,
        }} />
    </main>
  );
}
