"use client";
import { useEffect, useState } from "react";
import logo from "../../assets/GtextHoldingsLogo.png";
import { BiMenu, BiX } from "react-icons/bi";
import Button from "../atoms/Button";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navAnimation = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  console.log("patheName", pathname);

  //   const router = useRouter()
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleOnclick = () => {
    // router.push("/contact-us");
  };

  return (
    <motion.nav
      className="container mx-auto fixed top-0 left-0 right-0 w-full px-5 md:px-20 z-20"
      variants={navAnimation}
      initial="hidden"
      animate="show"
    >
      <div
        className={`p-2 md:p-4 !pr-6 !pl-5 w-full flex items-center justify-between rounded-full mt-5 mx-auto bg-white shadow-xl`}
      >
        <a href="/">
          <img
            src={logo}
            alt="logo"
            width={93}
            height={44}
            className="m-0 cursor-pointer"
          />
        </a>
        <ul className="hidden lg:flex gap-3 md:gap-5">
          {navLinks.map(({ id, link, title }) => (
            <li key={id}>
              <Link
                to={link}
                key={id}
                className={`text-sm text-black md:text-base relative hover:text-red-900 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bg-red-900 after:left-0 after:-bottom-1 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === link && "!text-red-900 after:scale-x-100"
                }`}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="max-lg:hidden flex items-center gap-2">
          <Button
            text="Login"
            className="max-lg:hidden text-sm md:text-base text-black font-medium px-6 py-3"
            variant="tertiary"
            onClick={handleOnclick}
          />
          <Button
            text="Ready to Invest"
            className="max-lg:hidden text-xl font-medium px-6 py-3"
            onClick={handleOnclick}
          />
        </div>
        <BiMenu
          className={`lg:hidden w-7 h-7 cursor-pointer ${
            scrolling ? "text-black" : "text-white"
          }`}
          onClick={toggleMobileMenu}
        />
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 z-20 px-4 pt-4 w-64 h-full bg-white shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close icon */}
            <div className="flex justify-end py-4 mr-5">
              <BiX
                className="w-10 h-10 cursor-pointer rounded-md text-black-100 hover:text-white hover:bg-gray-300 p-1"
                onClick={toggleMobileMenu}
              />
            </div>
            {/* NavLinks */}
            <ul className="flex flex-col w-full">
              {navLinks.map(({ id, title, link }) => (
                <li key={id} className="w-full">
                  <a
                    href={link}
                    className="text-black hover:text-white hover:bg-gray-300 p-4 w-full inline-block"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
            <div className=" flex flex-col pl-4 md:items-center gap-2 mt-4">
              <Button
                text="Ready to Invest"
                className="w-fit"
                onClick={handleOnclick}
              />
              <Button
                text="Login"
                className="w-fit text-sm md:text-base text-black font-medium px-6 py-3"
                variant="tertiary"
                onClick={handleOnclick}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black-100 opacity-50 z-10"
          style={{ transition: "opacity 0.3s ease-in-out" }}
          onClick={toggleMobileMenu}
        ></div>
      )}
    </motion.nav>
  );
};

export default Header;

const navLinks = [
  {
    id: 1,
    title: "About",
    link: "/",
  },
  {
    id: 2,
    title: "Investments",
    link: "/investment",
  },
  {
    id: 3,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    title: "IRA",
    link: "/ira",
  },
];
