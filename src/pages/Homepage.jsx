import "./Homepage.scss";
import React from "react";

const Homepage = () => {
  return (
    <>
      <main className="main">
        <section className="start__section">
          <div className="start__container">
            <div className="start__block-wrapper">
              <div className="start__block-main d-fl">
                <div className="start__block-left d-fl-col">
                  <h1>
                    A platform
                    <br />
                    that works smarter
                  </h1>
                  <p>
                    NoTab allows bars & nightclubs
                    <br />
                    to manage, understand, and
                    <br className="start__block-mobile" /> grow
                    <br className="start__block-pc" />
                    their business from <br className="start__block-mobile" />a
                    single dashboard
                  </p>
                </div>
                <div className="start__block-right d-fl">
                  <div className="start__element-gradient"></div>
                  <div className="start__right-filter"></div>
                  <div className="start__block-right--img">
                    <img src="./img/photo/phone.webp" alt="phone" />
                  </div>
                </div>
              </div>
              <div className="start__block-bottom d-fl-wrap">
                <h3>Download our app</h3>
                <div className="button__store d-fl-wrap">
                  <a href="/" className="button__store-ios">
                    <img src="./img/icon/app-store.svg" alt="app-store" />
                  </a>
                  <a href="/" className="button__store-google">
                    <img src="./img/icon/google-play.svg" alt="app-store" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info__section">
          <div className="info__container d-fl-wrap">
            <a href="/" className="info__block info__block-left">
              <p>Would like to become a member, please contact us</p>
              <a href="/">support@notab.com</a>
            </a>
            <a href="/" className="info__block info__block-right">
              <p>Already a partner?</p>
              <a href="/">Login</a>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export { Homepage };
