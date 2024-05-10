import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({}); // Use the correct function name

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};