import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <section className="app__bg app__wrapper section__padding">
    <div
      className="app__wrapper_img app__wrapper_img-reverse"
      data-aos="fade-up"
      data-aos-duration="2500"
      data-aos-delay="400"
      data-aos-once="true"
    >
      <img src={images.chef} alt="chef" />
    </div>

    <div
      className="app__wrapper_info"
      data-aos="fade-up"
      data-aos-duration="2500"
      data-aos-delay="800"
      data-aos-once="true"
    >
      <SubHeading title="Palavras do chef" />
      <h1 className="headtext__cormorant">O que Acreditamos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="comentário" />
          <p className="p__opensans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            veniam cum eos impedit odio sunt.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          labore commodi quam. Doloremque hic quas iusto consequatur doloribus
          blanditiis corrupti.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Joshua Mei</p>
        <p
          style={{ fontSize: ".75rem", fontStyle: "italic", color: "#AAAAAA" }}
        >
          - Chef & Proprietário
        </p>
      </div>
    </div>
  </section>
);

export default Chef;
