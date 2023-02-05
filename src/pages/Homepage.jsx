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
        <section className="mission__section">
          <div className="mission__container d-fl">
            <div className="mission__block mission__block-left">
              <div className="mission__block-img">
                <img src="./img/photo/phone__mission.webp" alt="phone" />
              </div>
              <div className="mission__block-img--mobile">
                <img src="./img/photo/phone.webp" alt="phone" />
              </div>
            </div>
            <div className="mission__block mission__block-right">
              <h2 className="main__title">Our mission and vision</h2>
              <p className="main__text">
                While technology is our sweet spot, we’ve developed our vision
                alongside our customers to ensure your everyday problems are
                solved through simplistic tools. And as your business grows,
                we’ll grow right alongside with you.
              </p>
            </div>
          </div>
        </section>
        <section className="scanner__section">
          <div className="scaner__backgroud-img"></div>
          <div className="backgroud-gradient"></div>
          <div className="scanner__container">
            <div className="scanner__wrapper d-fl-wrap--reverse">
              <div className="scanner__phone">
                <div className="scanner__phone-img">
                  <img
                    src="./img/photo/verification-1.png"
                    alt="verification 1"
                  />
                </div>
                <div className="scanner__phone-img">
                  <img
                    src="./img/photo/verification-2.png"
                    alt="verification 1"
                  />
                </div>
              </div>
              <div className="scanner__text">
                <h2 className="main__title">ID Scanner</h2>
                <p className="main__text">
                  Scan, verify, and collect data on each person that walks
                  through your door to humanize your data. You also get a
                  digital 86 list as well as a citywide ban list to keep your
                  venue safe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { Homepage };
