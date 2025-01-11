import { useState } from "react";
import { RouteLinks } from "@routes/routeUtils";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();

  return (
    <div className="relative">

      {!isOpen && (
        <div
          onClick={toggleNav}
          className="fixed top-4 right-4 "
        >
          <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
        </div>
      )}

      {isOpen && (
            <>
                <div
                    onClick={toggleNav}
                    className="fixed top-0 left-0 md:w-2/3 w-1/3 h-full bg-black bg-opacity-85 z-50"
                ></div>
            </>
        )}

      {/* Right side nav */}
      <div
        className={`fixed top-0 right-0 h-full md:w-1/3 w-2/3 bg-gray-700 text-white transition-transform duration-300 ${
          isOpen ? 'transform translate-x-0 z-50' : 'transform translate-x-full'
        }`}
      >

        {isOpen && (
            <>
                <div
                    onClick={toggleNav}
                    className="fixed top-4 right-4 z-10"
                    >
                    <FontAwesomeIcon icon={faX} className="w-8 h-8 z-[500]" />
                </div>
            </>
        )}
        {/* LOGO */}

        <div className="text-center text-2xl mt-32 mb-48" onClick={toggleNav}>
            <Link to="/">
                <h1 className='text-4xl font-semibold'>
                    Abhishek<span className='text-accent'>.</span>
                </h1>
            </Link>
        </div>

        {/* Nav Links */}

        <div className="flex flex-col justify-center items-center gap-8">
            {RouteLinks.map((link, index) => {
                return (
                <Link key={index} to={link.path}
                    className={`${ link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent transition-all`}>
                    {link.name}
                </Link>
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
