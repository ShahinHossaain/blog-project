import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GiCrossMark } from "react-icons/gi";
import Image from "./Image";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import ActiveLink from "./ActiveLink";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser();

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => console.log(token));
  }, []);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO  */}
      <Link to="/" className="flex items-center gap-4 font-bold">
        <Image className="w-8 h-8" url="/logo.png" />
        <span>BlogVibe </span>
      </Link>
      {/* MOBILE MENU  */}
      <div className="md:hidden mr-3" onClick={() => setOpen((prev) => !prev)}>
        {/* MOBILE BUTTON  */}
        {open ? <GiCrossMark /> : <CiMenuFries />}
        {/* MOBILE LINK LIST  */}
        <div
          className={`w-full flex flex-col pb-5 items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease bg-white/10 backdrop-blur-md ${
            open ? "-right-0 block" : "-right-[100%] hidden"
          }`}
        >
          <ActiveLink to="/">Home</ActiveLink>
          {isSignedIn && <ActiveLink to="/write">Create Post</ActiveLink>}
          {isSignedIn && <ActiveLink to="/my-post">My Post</ActiveLink>}
          {isSignedIn && <ActiveLink to="/saved">Saved Posts</ActiveLink>}
          <ActiveLink to="/trending">Trending</ActiveLink>
          <ActiveLink to="/popular">Most Popular</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <SignedOut>
            <ActiveLink to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Log in 👋
              </button>
            </ActiveLink>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* DESKTOP MENU  */}
      <div className="hidden md:flex gap-8 xl:gap-12 items-center  font-medium">
        <ActiveLink to="/">Home</ActiveLink>
        {isSignedIn && <ActiveLink to="/write">Create Post</ActiveLink>}
        {isSignedIn && <ActiveLink to="/my-post">My Post</ActiveLink>}
        {isSignedIn && <ActiveLink to="/saved">Saved Posts</ActiveLink>}
        <ActiveLink to="/trending">Trending</ActiveLink>
        <ActiveLink to="/popular">Most Popular</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
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
