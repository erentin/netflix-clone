import { SignUp } from "@clerk/nextjs";

import {neobrutalism} from "@clerk/themes";

export default function Home() {
  return (
    <main className="flex justify-center">
      <SignUp appearance={{
          baseTheme: neobrutalism,
        }} />
    </main>
  );
}
