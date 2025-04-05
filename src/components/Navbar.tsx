import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GiCrossMark } from "react-icons/gi";
import Image from "./Image";
import { Link } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO  */}
      <Link to="/" className="flex items-center gap-4 font-bold">
        <Image className="w-8 h-8" url="/logo.png" />
        <span>BlogVibe </span>
      </Link>
      {/* MOBILE MENU  */}
      <div className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
        {/* MOBILE BUTTON  */}
        {open ? <GiCrossMark /> : <CiMenuFries />}
        {/* MOBILE LINK LIST  */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">about</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Log in 👋
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU  */}
      <div className="hidden md:flex gap-8 xl:gap-12 items-center  font-medium">
        <Link to="/home">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">about</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Log in 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
