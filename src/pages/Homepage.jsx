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
                <div className="start__block-left">
                  <h1>
                    A platform
                    <br />
                    that works smarter
                  </h1>
                  <p>
                    NoTab allows bars & nightclubs
                    <br />
                    to manage, understand, and grow
                    <br />
                    their business from a single dashboard
                  </p>
                </div>
                <div className="start__block-right d-fl">
                  <div className="start__block-right--img">
                    <img src="./img/photo/phone.webp" alt="phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { Homepage };
