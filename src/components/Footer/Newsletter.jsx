import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <section className="app__newsletter">
    <div
      className="app__newsletter-wrapper"
      data-aos="fade-in"
      data-aos-duration="2500"
      data-aos-delay="600"
      data-aos-once="true"
    >
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Inscreva-se já!</h1>
        <p className="p__opensans">Inscreva-se e não perca nossas novidades!</p>
      </div>

      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Digite seu email" />
        <button type="button" className="custom__button">
          Inscrever
        </button>
      </div>
    </div>
  </section>
);

export default Newsletter;
