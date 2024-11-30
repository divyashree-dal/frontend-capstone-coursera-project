import React from "react";
import LogoFooter from "../../assets/logo-white.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="pt-20 flex sm:flex-row flex-col  gap-11 justify-around bg-primary-green p-20 font-karla text-secondary-gray overflow-x-hidden">
      {/*column 1 */}

      <img src={LogoFooter} alt="footer-logo" width={80} height={70} />
      {/* column 2*/}
      <div className="flex flex-col">
          <p className="text-2xl font-semibold"> SITEMAP</p>
          <Link className="hover:text-secondary-orange" to="/">Home</Link>
          <Link className="hover:text-secondary-orange" to="/about">About</Link>
          <Link className="hover:text-secondary-orange" to="/menu">Menu</Link>
          <Link className="hover:text-secondary-orange" to="/reservations">Reservations</Link>
          <Link className="hover:text-secondary-orange" to="/order-online">Order Online</Link>
          <Link className="hover:text-secondary-orange" to="/login">Login</Link>
        </div>
      {/* column 3 */}
      <div className="flex flex-col">
          <p className="text-2xl font-semibold"> CONTACT</p>
          <p className=""> 96 Isabella</p>
          <p className=""> 987-654-4321</p>
          <p className=""> littlelemon@social.com</p>
        </div>
      {/* column 4*/}
      <div className="flex flex-col">
          <p className=" text-2xl font-semibold"> SOCIAL MEDIA LINKS</p>
          <a className="hover:text-secondary-orange" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="hover:text-secondary-orange" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="hover:text-secondary-orange" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
    </section>
  );
}

export default Footer;
