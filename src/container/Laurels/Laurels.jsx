import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="premiação" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <small>{subtitle}</small>
    </div>
  </div>
);

const Laurels = () => (
  <section className="app__bg section__padding" id="awards">
    <div className="app__laurels_info">
      <SubHeading title="Premiações e Reconhecimento" />
      <h1 className="headtext__cormorant">Nossos Louros</h1>

      <div className="app__laurels_awards">
        <div
          className="app__laurels_awards-wrapper"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="400"
          data-aos-once="true"
        >
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={index} />
          ))}
        </div>
        <div
          className="app__laurels_img"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="800"
          data-aos-once="true"
        >
          <img src={images.laurels} alt="prato feito decorado" />
        </div>
      </div>
    </div>
  </section>
);

export default Laurels;
