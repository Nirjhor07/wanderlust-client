"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  //handle logout btn-- end session
  const handleLogoutBtn = async () => {
    await authClient.signOut();
  };

  const { data: session } = authClient.useSession();
  // console.log(session);
  return (
    <nav className="flex justify-between w-11/12 py-4 mx-auto bg-white-200">
      {/* first items */}
      <ul className="flex gap-2 items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li>
          <Link href={"/bookings"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/admin"}>Admin</Link>
        </li>
      </ul>
      {/* Logo will be shown here */}
      <div className="flex items-center justify-center">
        <Image
          src={"/assets/Wanderlast.png"}
          height={150}
          width={150}
          alt="logo"
        />
      </div>

      {/* nav last items */}
      <ul className="flex gap-2.5 items-center">
        {!session ? (
          <>
            <li>
              <Link href={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
          </>
        ) : (
          <>
            <div className="flex items-center gap-1">
              <Image
                className="rounded-full border-2 shadow-2xs"
                height={30}
                width={30}
                alt={session?.user?.name}
                src={session?.user.image}
              />

              <p>{session?.user.name}</p>
              <Button onClick={handleLogoutBtn} variant="danger">
                Log Out
              </Button>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
