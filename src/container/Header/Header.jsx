import React from "react";
import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

const Header = () => {
  return (
    <section className="app__header app__wrapper section__padding" id="home">
      <div
        className="app__wrapper_info"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <SubHeading title="Em busca do sabor perfeito" />
        <h1 className="headtext__cormorant">
          O verdadeiro requinte gastronômico
        </h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
          temporibus minima. Aspernatur voluptatum, minima possimus inventore
          totam harum molestias neque minus. Ullam error repellendus rem officia
          enim recusandae, necessitatibus reiciendis?
        </p>
        <button type="button" className="custom__button">
          Explore o menu
        </button>
      </div>
      <div
        className="app__wrapper_img"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <img src={images.welcome} alt="imagem do header" />
      </div>
    </section>
  );
};

export default Header;
