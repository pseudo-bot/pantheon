import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function NavItem({ name, link, setMenu }) {
  return (
    <Link href={link}>
      <div
        className="nav-links after:bg-gradient-to-r after:from-red-500 after:to-yellow-500 lg:rounded-sm overflow-hidden"
        onClick={() => {
          setMenu(false);
        }}
      >
        {name}
      </div>
    </Link>
  );
}
function NavItems({ menu, setMenu }) {
  return (
    <div
      className={`${
        menu ? "" : "opacity-0 pointer-events-none"
      } bg-black absolute h-[calc(100vh-4rem)] lg:h-auto right-0 top-16 w-44 flex lg:gap-0 flex-col gap-3 pl-4 py-4 lg:text-md text-gray-200 transition-all duration-200 lg:opacity-100 uppercase lg:pointer-events-auto tracking-wider lg:flex-row lg:relative lg:p-0 lg:top-0 lg:bg-transparent lg:w-auto -z-10 shadow-md lg:shadow-none lg:rounded-bl-lg`}
    >
      <NavItem name="Home" link="/" setMenu={setMenu} />
      <NavItem name="About" link="/about" setMenu={setMenu} />
      <NavItem name="Register" link="/register" setMenu={setMenu} />
      <NavItem name="Events" link="/events" setMenu={setMenu} />
      <NavItem name="Prizes" link="/prizes" setMenu={setMenu} />
      <NavItem name="Sponsors" link="/sponsors" setMenu={setMenu} />
      <NavItem name="FAQs" link="/faq" setMenu={setMenu} />
      <NavItem name="Contact" link="/contact" setMenu={setMenu} />
    </div>
  );
}

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar z-50 h-16 w-screen fixed flex items-center lg:justify-around px-4 bg-black top-0 shadow-sm">
      <div className="logo mt-4 cursor-pointer">
        <Link href="/">
          <Image src="/home/logo.png" height={70} width={70} alt="logo" />
        </Link>
      </div>
      <div
        className={`${
          menu ? "hamburger-menu--active" : ""
        } hamburger-menu absolute right-8 lg:hidden group`}
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <div className="bar-top group-hover:bg-white"></div>
        <div className="bar-middle group-hover:bg-white"></div>
        <div className="bar-bottom group-hover:bg-white"></div>
      </div>
      <NavItems menu={menu} setMenu={setMenu} />
    </nav>
  );
}
