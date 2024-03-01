import Image from "next/image";
import logo from "../public/assets/Logo.svg";
import user from "../public/assets/User.svg";
import menu from "../public/assets/Menu.svg";
import Link from "next/link";

const NavBar = () => {
  const links = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Enterprice" },
    { name: "Careers" },
  ];

  return (
    <nav
      className="flex items-center w-full justify-between px-[20px] 
    py-[16px] lg:container lg:mx-auto lg:px-10 "
    >
      <div className="flex items-center">
        <Image src={logo} alt="logo" />
        <div className="hidden lg:flex pl-[56px] gap-5">
          {links.map((link) => (
            <Link href={`/${link.name}`} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <p className="hidden lg:block text-[#36485C]  font-medium pr-[56px]">
          Open an Account?
        </p>
        <div className="flex gap-x-2 items-center">
          <Image src={user} alt="user" />
          <Link
            href={"/sign-in"}
            className="hidden lg:flex font-medium text-[#36485C] "
          >
            Sign in
          </Link>
        </div>
        <Image src={menu} alt="menu" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default NavBar;
