import React, { useState, useEffect, useRef } from "react";
import { Router } from "react-router";
import { NavLink, BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import {
  useWindowSize,
  useOnClickOutside,
  useScrollPosition,
} from "../hooks/useWindowSize";
import { background } from "../assets/index";
const Header = ({ data }) => {
  const { width } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const wrapperRef = useRef(null);

  const [openDrawer, setOpenDrawer] = useState(true);
  const onToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    if (width > 900) return onToggleDrawer(false);
  }, [width]);

  useOnClickOutside(wrapperRef, () => {
    if (openDrawer) {
      setOpenDrawer(false);
      console.log("clicked");
    }
  });

  const { name, occupation, description, social } = data;

  const networks = social.map((network) => {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });
  const navLinkEl = [
    { to: "#home", title: "home" },
    { to: "#resume", title: "resume" },
    { to: "#portfolio", title: "portfolio" },
    { to: "#contact", title: "contact" },
    { to: "#about", title: "about" },
  ];
  return (
    <section>
      <header
        id="home"
        // ref={wrapperRef}
        className={scrollPosition >= 1 ? "sticky" : ""}
      >
        <img src={background} alt="background" className="banner" />
        <div className=" banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}.</h1>
            <h2 className="occupation">{occupation}</h2>
            <br />
            <p className="description">{description}</p>
            <ul className="social">{networks}</ul>
          </div>
        </div>
        <div className="toggle" onClick={onToggleDrawer}>
          {!openDrawer ? (
            <i className="fas fa-align-justify"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </div>

        {/* <nav id="nav-wrap"> */}
        <nav>
          <BrowserRouter>
            <div className="container">
              {navLinkEl.map((item) => {
                return (
                  <div className="navbar__container" key={item.title}>
                    <Link
                      exact={item.exact}
                      to={item.to}
                      className="navbar__link"
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </BrowserRouter>
        </nav>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </section>
  );
};

export default Header;
