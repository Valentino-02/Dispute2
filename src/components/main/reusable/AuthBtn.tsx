"use client";

import { CircleUserRound, LogOut, Loader } from "lucide-react";
import { signOut, signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function AuthBtn() {
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session, status } = useSession();

  const onClick = async () => {
    setLoading(true);
    if (session) await signOut();
    if (!session) await signIn();
  };

  if (status === "loading")
    return <div className="bg-stone-700 w-6 h-6 rounded-full"></div>;

  if (loading) return <Loader className="animate-spin" />;

  return (
    <button
      className="hover:text-pink-400 duration-300 "
      onClick={() => onClick()}
    >
      {session ? <LogOut /> : <CircleUserRound />}
    </button>
  );
}
