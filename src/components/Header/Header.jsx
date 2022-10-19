import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__main d-fl">
            <div className="header__logo-wrapper d-fl">
              <div className="header__logo-left">
                <img src="./img/icon/logo.webp" alt="logo NoTab" />
              </div>
              <div className="header__logo-right">
                <img src="./img/icon/logo__notab.svg" alt="logo NoTab" />
              </div>
            </div>
            <div className="header__login">
              <span>Login</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
