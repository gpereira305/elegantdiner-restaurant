import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <section
    style={{ marginBottom: "1rem" }}
    data-aos="fade-in"
    data-aos-duration="2500"
    data-aos-delay="400"
    data-aos-once="true"
  >
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="colher" className="spoon__img" />
  </section>
);

export default SubHeading;
