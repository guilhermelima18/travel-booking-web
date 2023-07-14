"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "@/assets/logo.svg";
import { useState } from "react";

const STATUS_AUTHENTICATED = "authenticated";
const STATUS_UNAUTHENTICATED = "unauthenticated";

export const Header = () => {
  const { data, status } = useSession();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onSignIn = () => signIn();

  const onSignOut = () => {
    setMenuIsOpen(false);
    signOut();
  };

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="container mx-auto p-5 py-0 h-[95px] flex items-center justify-between">
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
        <div
          className="flex items-center gap-3 border-grayLighter border border-solid py-2 px-5 rounded-full relative"
          onClick={handleMenuClick}
        >
          <AiOutlineMenu size={16} />

          <Image
            className="rounded-full shadow-md"
            src={data.user?.image!}
            alt={data.user?.name!}
            width={32}
            height={32}
          />

          {menuIsOpen && (
            <div className="absolute top-14 left-0 w-full h-full bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
              <button
                className="text-primary text-sm font-semibold"
                onClick={onSignOut}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
