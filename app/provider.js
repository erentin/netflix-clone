"use client"
import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";

function Provider( {children} )  {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider className="bg-black h-[100vh] w-[100vw]" >
        {children}
    </NextUIProvider>

  );
}

export default Provider;