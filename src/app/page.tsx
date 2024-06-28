"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  const login = () => {
    signIn();
  };
  const logout = () => {
    signOut();
  };

  return (
    <div>
      <button onClick={login}> Login </button>
      <button onClick={logout}> Logout </button>
    </div>
  );
}
