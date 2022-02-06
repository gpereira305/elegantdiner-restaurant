import React from "react";
import { images, data } from "../../constants";
import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <section className="app__specialMenu flex-center section__padding" id="menu">
    <div
      className="app__specialMenu-title"
      data-aos="fade-in"
      data-aos-duration="2500"
      data-aos-delay="400"
      data-aos-once="true"
    >
      <SubHeading title="O Menu perfeito para o seu paladar" />
      <h1 className="headtext__cormorant">Bebidas</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div
        className="app__specialMenu-menu_wine"
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-delay="900"
        data-aos-once="true"
      >
        <p className="app__specialMenu-menu_heading">Vinhos & Chopps</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              tags={wine.tags}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div
        className="app__specialMenu-menu_img"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <img src={images.menu} alt="coqueteleira" />
      </div>

      <div
        className="app__specialMenu-menu_cocktails"
        data-aos="fade-up"
        data-aos-duration="2500"
        data-aos-delay="900"
        data-aos-once="true"
      >
        <p className="app__specialMenu-menu_heading">Coquetéis</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              tags={cocktail.tags}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "1rem", textAlign: "center" }}>
      <button type="button" className="custom__button">
        Saiba Mais
      </button>
    </div>
  </section>
);

export default SpecialMenu;
