import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const imgs = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery05,
    images.gallery06,
    images.gallery07,
    images.gallery08,
    images.gallery09,
    images.gallery10,
    images.gallery11,
    images.gallery12,
    images.gallery13,
    images.gallery14,
    images.gallery15,
  ];

  return (
    <section className="app__gallery flex_center section__padding">
      <div
        className="app__gallery-content"
        data-aos="fade-in"
        data-aos-duration="2500"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Galeria de Fotos</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor natus
          beatae quidem quibusdam sint architecto a ea ullam, iste consectetur.
        </p>
        <button type="button" className="custom__button">
          Saiba mais
        </button>
      </div>

      <div className="app__gallery-images">
        <div
          className="app__gallery-images_container"
          ref={scrollRef}
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="800"
          data-aos-once="true"
        >
          {imgs.map((img, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery__image-${index + 1}`}
            >
              <img src={img} alt="galeria de images" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div
          className="app__gallery-images_arrows"
          data-aos="fade-in"
          data-aos-duration="2500"
          data-aos-delay="2000"
          data-aos-once="true"
        >
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
