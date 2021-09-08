import React from "react";

const Footer = ({ data }) => {
  const networks = data?.social?.map((network) => {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="row">
        <div className="twelve collumns">
          <ul className="social-links">{data ? networks : null}</ul>
        </div>
        <div id="go-top">
          <a
            className="smoothscroll"
            title="Back to top"
            onClick={onScrollToTop}
          >
            <i className="fas fa-arrow-up"></i>{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
