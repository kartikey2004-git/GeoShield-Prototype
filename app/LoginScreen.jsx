"use client";
import { signIn } from "next-auth/react";
import { Search, TrendingUp, BarChart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/subComponents/Hero";
import SeeInAction from "@/components/subComponents/SeeInAction";
import Features from "@/components/subComponents/Features";
import Testimonials from "@/components/subComponents/Testimonials";

const iconMap = {
  Search,
  TrendingUp,
  BarChart,
  Bell,
};

export default function LoginScreen() {
  return (
    <>
      <div className="relative min-h-screen  overflow-hidden bg-black text-white">
        <Hero />
        <SeeInAction />
        <Features />
        <Testimonials />
      </div>
    </>
  );
}

/*

It is not a server component , so we cannot use server functionality here , so instead we need to use only API calls and we need to do client request to our backend


signIn : 
  
   - helper function provided by NextAuth. 
   - To start the login flow with any provider you’ve configured (Google, GitHub, Credentials, etc.).


How it works
   
  - call it → signIn("google")
  - NextAuth redirects the user to that provider’s login page.

  - User logs in → provider (like Google) verifies identity.
  - NextAuth creates a session and stores it (via cookies/JWT).

  - User is sent back to your app with a valid session.


*/
