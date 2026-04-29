'use client'
import Image from "next/image";

import React from "react";
import avaterImage from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";


const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();

  const user = session?.user || null;

    console.log(user, "user")

  return (
    <div className="flex justify-between container mx-auto gap-4 mt-8">
      <div></div>
      <ul className="flex justify-between items-center gap-3  text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      {user ? (<div className="flex items-center gap-2">
        <h2>
          Hello, {user?.name ?? "Guest"}
        </h2>
        <Image
          src={user?.image ? user.image : avaterImage}
          alt="User Avater"
          width={60}
          height={60}
        ></Image>
        <button className="btn bg-red-500 text-white" onClick={async()=> await authClient.signOut()}>Logout</button>
      </div>) :(
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
        
      ) }
    </div>
  );
};

export default Navbar;
