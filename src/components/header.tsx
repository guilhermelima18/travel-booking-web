"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "@/assets/logo.svg";

const STATUS_AUTHENTICATED = "authenticated";
const STATUS_UNAUTHENTICATED = "unauthenticated";

export const Header = () => {
  const { data, status } = useSession();

  const onSignIn = () => {
    signIn();
  };

  return (
    <div className="container mx-auto p-5 flex items-center justify-between">
      <Image src={logo} alt="Logo Travel Booking" width={32} height={32} />

      {status === STATUS_UNAUTHENTICATED && (
        <button
          className="text-primary text-sm font-semibold"
          onClick={onSignIn}
        >
          Login
        </button>
      )}

      {status === STATUS_AUTHENTICATED && data.user && (
        <div className="flex items-center gap-3">
          <AiOutlineMenu size={16} />

          <Image
            className="rounded-full"
            src={data.user?.image!}
            alt={data.user?.name!}
            width={24}
            height={24}
          />
        </div>
      )}
    </div>
  );
};
