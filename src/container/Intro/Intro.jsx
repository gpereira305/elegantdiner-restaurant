import React, { useState } from "react";
import { images } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideoPlay = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <section className="app__video">
      <video
        src={images.meal}
        type="video/mp4"
        loop
        muted
        ref={vidRef}
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideoPlay}
        >
          {playVideo ? (
            <BsPauseFill title="Pausar video" />
          ) : (
            <BsFillPlayFill title="Reproduzir video" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
