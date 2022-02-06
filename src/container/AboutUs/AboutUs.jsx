import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <section
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div
        className="app__aboutus-content_about"
        data-aos="fade-in"
        data-aos-duration="2500"
        data-aos-delay="600"
        data-aos-once="true"
      >
        <h1 className="headtext__cormorant">Sobre Nós</h1>
        <img src={images.spoon} alt="colher" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          impedit deserunt cum ex. Perspiciatis, omnis in ullam tenetur beatae
          quod praesentium laborum velit. Voluptatibus eaque vitae non
          exercitationem nesciunt sed.
        </p>
        <button type="button" className="custom__button">
          Saiba Mais
        </button>
      </div>

      <div
        className="app__aboutus-content_knife flex__center"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <img src={images.knife} alt="faca" />
      </div>

      <div
        className="app__aboutus-content_history"
        data-aos="fade-in"
        data-aos-duration="2500"
        data-aos-delay="600"
        data-aos-once="true"
      >
        <h1 className="headtext__cormorant">Nossa História</h1>
        <img src={images.spoon} alt="colher" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          impedit deserunt cum ex. Perspiciatis, omnis in ullam tenetur beatae
          quod praesentium laborum velit. Voluptatibus eaque vitae non
          exercitationem nesciunt sed.
        </p>
        <button type="button" className="custom__button">
          Saiba Mais
        </button>
      </div>
    </div>
  </section>
);

export default AboutUs;
