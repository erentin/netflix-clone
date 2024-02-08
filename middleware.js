import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server"; 

export default authMiddleware({

  afterAuth(auth, req, evt) {

    console.log(req.nextUrl.pathname)

    if (auth.userId && req.nextUrl.pathname == '/') {
      console.log(auth.userId, req.nextUrl.pathname, new URL("/home", req.url))
      const orgSelection = new URL("/home", req.url);
      return NextResponse.redirect(orgSelection);
    }

  },
  publicRoutes: ["/"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};