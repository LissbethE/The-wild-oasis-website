/*import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  // redirect the user
  return NextResponse.redirect(new URL("/about", request.url));
}

// get redirected from cabins
export const config = {
  matcher: ["/account", "/cabins"],
};
*/

import { auth } from "./lib/auth";

// this auth() has many different functionalities, so it severs to get to current session,
// it also serves as a middleware

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
