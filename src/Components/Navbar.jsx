import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-11/12 py-4 mx-auto bg-white-200">
      {/* first items */}
      <ul className="flex gap-2">
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
      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          height={150}
          width={150}
          alt="logo"
        />
      </div>

      {/* nav last items */}
      <ul className="flex gap-2.5">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
