import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const Header = () => {
  return (
    <>
      <header className="header ">
        <div className="header__row">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            className="header__logo"
            alt="GoogleKeepLogo"
          />
          <span className="header__text">GoogleKeep-Clone</span>
        </div>
      </header>
    </>
  );
};

export default Header;
