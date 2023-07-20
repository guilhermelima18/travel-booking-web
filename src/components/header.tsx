"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "@/assets/logo.svg";
import { useState } from "react";
import Link from "next/link";

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
    <div className="w-full h-[90px] flex items-center px-5 border-b border-gray-300">
      <header className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="Logo Travel Booking" width={32} height={32} />
        </Link>

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
              <div className="absolute top-14 -left-10 w-[140px] h-[80px] bg-white rounded-lg flex flex-col items-center justify-center gap-2 shadow-md cursor-pointer">
                <Link
                  href="/my-trips"
                  className="text-primary font-semibold text-xs"
                >
                  Minhas viagens
                </Link>
                <button
                  className="text-primary text-xs font-semibold"
                  onClick={onSignOut}
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        )}
      </header>
    </div>
  );
};
