import React, { useState } from "react";
import UseMediaQuery from "../../hooks/UseMediaQuery";
import Logo from "../../assets/Logo .svg";
import Hamburger from "../../assets/🦆 icon _hamburger menu.svg";

function Header() {
  const isAboveSmallScreens = UseMediaQuery("(min-width: 720px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const links = [
    {
      url: "/menu",
      text: "Menu",
    },
    {
      url: "/reservations",
      text: "Reservations",
    },
    {
      url: "/order",
      text: "Order Online",
    },
    {
      url: "/login",
      text: "Login",
    },
  ];

  return (
    <nav className="z-40 w-full fixed top-0 py-5 bg-secondary-gray ">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <button onClick={() => window.location.reload()}>
          <img src={Logo} alt="logo" height={50} />
        </button>

        {isAboveSmallScreens ? (
          <ul className="flex gap-10 justify-between font-karla text-lg text-primary-green font-medium">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#about" onClick={handleClick("about")}>
                About
              </a>
            </li>
            {links.map((link) => {
              return (
                <li key={link.url}>
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <button
            className="absolute right-10"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {!isMenuToggled ? (
              <img src={Hamburger} alt="hamburger" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            )}
          </button>
        )}

        {/* Mobile Menu*/}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="absolute right-0 top-0 bg-secondary-gray w-[60%] pb-5 -z-10 rounded-tl-2xl rounded-bl-2xl">
            <div className="flex justify-center right-0 p-5"></div>
            <div className=" flex flex-col gap-5 items-center justify-center ">
              <ul className="flex flex-col gap-10 items-center justify-center p-5 font-karla text-lg text-primary-green font-medium">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#about" onClick={handleClick("about")}>
                    About
                  </a>
                </li>
                {links.map((link) => {
                  return (
                    <li key={link.url}>
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
