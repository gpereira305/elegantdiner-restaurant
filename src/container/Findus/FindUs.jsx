import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <section className="app__bg app__wrapper section__padding" id="contact">
    <div
      className="app__wrapper_info"
      data-aos="fade-in"
      data-aos-duration="2500"
      data-aos-delay="400"
      data-aos-once="true"
    >
      <SubHeading title="Contato" />
      <h1 className="headtext__cormorant" style={{ marginTop: "2rem" }}>
        Encontre nos
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane ends Bungalow, whatcraft hall lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ margin: "2rem 0 0", color: "#dcca87" }}
        >
          Horário de funcionamento
        </p>
        <p className="p__opensans">Seg - Sex: 10:00 hrs - 21:00 hrs</p>
        <p className="p__opensans">Sáb - Dom: 11:30 hrs - 23:30 hrs</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visite nos
      </button>
    </div>
    <div
      className="app__wrapper_img"
      data-aos="fade-up"
      data-aos-duration="2500"
      data-aos-delay="800"
      data-aos-once="true"
    >
      <img src={images.findus} alt="contacte nos" />
    </div>
  </section>
);

export default FindUs;
