import React from "react";
import UseMediaQuery from "../../hooks/UseMediaQuery";
import Logo from "../../assets/Logo .svg";

function Header() {
  const isAboveSmallScreens = UseMediaQuery("(min-width: 820px)");

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
    <nav className="z-40 w-full fixed top-0 py-4">
      <div className="flex items-center justify-around mx-auto w-5/6">
        <button onClick={() => window.location.reload()}>
          <img src={Logo} alt="logo" height={50} />
        </button>

        {isAboveSmallScreens ? (
          <ul className="flex gap-10 justify-between font-karla text-lg text-primary-green font-medium">
            <li>
              <a href="#">Home</a>
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
          <></>
        )}
      </div>
    </nav>
  );
}

export default Header;
