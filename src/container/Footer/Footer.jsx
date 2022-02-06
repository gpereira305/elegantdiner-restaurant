import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => {
  const getActualYear = new Date().getFullYear();

  return (
    <section className="app__footer section__padding app__bg">
      <div className="app__footer-links">
        <div
          className="app__footer-links_contact"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <h1 className="app__footer-headtext">Entre em contato conosco</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 234-346-3478</p>
          <p className="p__opensans">+1 234-346-3479</p>
        </div>

        <div
          className="app__footer-links_logo"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="800"
          data-aos-once="true"
        >
          <h1 className="app__logo-style" title="logo do restaurante">
            Elegant Diner
          </h1>
          <p className="p__opensans">
            A melhor forma de se encontrar é fazer aquilo que fazes por amor
          </p>
          <img
            src={images.spoon}
            alt="colher"
            className="spoon__img"
            style={{ marginTop: ".5rem" }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook title="Facebook" />
            <FiTwitter title="Twitter" />
            <FiInstagram title="Instagram" />
          </div>
        </div>

        <div
          className="app__footer-links_work"
          data-aos="fade-up"
          data-aos-duration="2500"
          data-aos-delay="1000"
          data-aos-once="true"
        >
          <h1 className="app__footer-headtext">Horários de funcionamento</h1>
          <p className="p__opensans">De Segunda à Sexta-feira</p>
          <p className="p__opensans">10:00 hrs - 21:00 hrs</p>
          <p className="p__opensans">De Sábado à Domingo</p>
          <p className="p__opensans">11:30 hrs - 23:30 hrs</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">
          &copy; {getActualYear} Elegant Diner Restaurant. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
