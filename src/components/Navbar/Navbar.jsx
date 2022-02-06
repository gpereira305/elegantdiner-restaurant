import React, { useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const appLinks = [
  { link: "home", title: "Home" },
  { link: "about", title: "Sobre nós" },
  { link: "menu", title: "Nosso menu" },
  { link: "awards", title: "Premiações" },
  { link: "contact", title: "Contato" },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);

  // determina a posisão em que o scroll icon irá aparecer na página
  const toggleFixed = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setFixedHeader(true);
    } else if (scrolled <= 500) {
      setFixedHeader(false);
    }
  };

  //  deixa o scroll icon visível na página
  window.addEventListener("scroll", toggleFixed);

  return (
    <nav
      className="app__navbar"
      style={{
        position: fixedHeader ? "fixed" : "relative",
        transition: "all .5s ease-in-out",
        zIndex: 100,
      }}
    >
      <div className="app__navbar-logo">
        <a className="app__logo-style" title="Logo | Home" href="#home">
          Elegant Diner
        </a>
      </div>
      <ul className="app__navbar-links">
        {appLinks.map((appLink, index) => (
          <li className="p__opensans" key={index}>
            <a href={`#${appLink.link}`}>{appLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Resgistrar
        </a>
        <div />
        <a href="/" className="p__opensans">
          Reservas
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={25}
          onClick={() => setToggleMenu(true)}
          title="Abrir menu"
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
              title="Fechar menu"
            />
            <ul className="app__navbar-smallscreen_links">
              {appLinks.map((appLink, index) => (
                <li className="p__opensans" key={index}>
                  <a
                    href={`#${appLink.link}`}
                    onClick={() => setToggleMenu(false)}
                  >
                    {appLink.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
