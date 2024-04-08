"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

type ProviderResponse = any;
const Nav = () => {
  // const session?.user = true;
  const { data: session } = useSession();
  const [providers, setProviders] = useState<ProviderResponse>({});
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);


  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt=""
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompter</p>
      </Link>

      {/* MOBILE NAV */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button
              type="button"
              onClick={() => signOut}
              className="outline_btn"
            >
              Sign Out
            </button>
            <Link
              href="/profile"
              className="flex border border-gray-500 rounded-full px-1"
            >
              <Image
                src="/assets/images/profile.svg"
                alt="profile"
                width={25}
                height={25}
                className="rounded-full aspect-square"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any, key) => {
                return (
                  <button
                    type="button"
                    className="black_btn"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Login
                  </button>
                );
              })}
          </>
        )}
      </div>

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src="/assets/images/profile.svg"
              width={25}
              height={25}
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>

                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any, key) => {
                return (
                  <button
                    type="button"
                    className="black_btn"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Login
                  </button>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
