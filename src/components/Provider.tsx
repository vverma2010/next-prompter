'use client';
import React from "react";
import { SessionProvider } from "next-auth/react";

interface ProviderInterface {
  children: React.ReactNode;
  session: any;
}

const Provider: React.FC<ProviderInterface> = ({ children, session }) => {
  return <SessionProvider session={session} >{children}</SessionProvider>;
};

export default Provider;
