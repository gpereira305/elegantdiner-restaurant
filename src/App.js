import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar, Newsletter } from "./components";
import GoTop from "./components/GoTop/GoTop";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init();

  return (
    <section>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Newsletter />
      <Footer />
      <GoTop />
    </section>
  );
};

export default App;
