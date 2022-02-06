import React, { useState } from "react";
import { BsArrowUpSquare } from "react-icons/bs";

const GalleryScrollTop = () => {
  const [visible, setVisible] = useState(false);

  // determina a posisão em que o scroll icon irá aparecer na página
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  //  comportamento do scroll icon setado para suave
  const scrollTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //  deixa o scroll icon visível na página
  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="scroll-top">
      <BsArrowUpSquare
        onClick={scrollTopPage}
        title="Voltar ao topo da página"
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default GalleryScrollTop;
