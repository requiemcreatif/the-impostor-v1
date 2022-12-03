import React from "react";
import Patrick from "../music/patrick_watson.mp3";
import Touch from "../music/touch.mp3";
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";

const Music = () => {
  //   const audio = new Audio(Patrick);
  //   audio.loop = true;
  //   audio.play();

  return (
    <div>
      {/* <audio controls>
        <source src={Patrick} type="audio/mpeg" autoPlay />
      </audio> */}
      <ReactAudioPlayer
        className="player"
        src={Patrick}
        autoPlay={true}
        loop={true}
        controls
        volume={0.1}
      />
    </div>
  );
};

export default Music;
