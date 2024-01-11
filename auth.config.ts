import type { NextAuthConfig } from 'next-auth';

// Config options for NextAuth.js
export const authConfig = {
  pages: {
    // in situation user redirected to that pages
    signIn: '/login',
    signOut: '/',
  },
  callbacks: {
    // The authorized callback is used to verify if the request is authorized to access a page via Next.js Middleware
    authorized({ auth, request: { nextUrl } }) {
      // The auth property contains the user's session, and the request property contains the incoming request.
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  // The providers option is an array where you list different login options
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
