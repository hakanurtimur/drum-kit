import React, { useState } from "react";
import classes from "./DrumKit.module.css";
import StarterHero from "../../img/startButton/StarterHero";
import Audio from "./audio";
import { keyArray } from "./audio";
import VoiceBoard from "./VoiceBoard";

export default function DrumKit() {
  const [isAnimating, setIsAnimating] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [textDisplay, setTextDisplay] = useState("block");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleKeyDown = (event) => {
    event.preventDefault();
    const keyPressed = event.key.toLowerCase();


    if (
      keyPressed === "q" ||
      keyPressed === "w" ||
      keyPressed === "e" ||
      keyPressed === "r" ||
      keyPressed === "t" ||
      keyPressed === "y" ||
      keyPressed === "u" ||
      keyPressed === "a" ||
      keyPressed === "s" ||
      keyPressed === "d" ||
      keyPressed === "f" ||
      keyPressed === "g" ||
      keyPressed === "h"
    ) {
      const audio = document.querySelector(`#${event.key.toLowerCase()}`);
      setIsAnimating(event.key);
      audio.currentTime = 0;
      audio.play();
      setIsPlaying(true);
    } else {
      return;
    }
  };

  const handleKeyUp = () => {
    setIsAnimating(null);
    setIsPlaying(false);
  };

  const handlerClick = () => {
    setIsClicked(true);
  };

  const animationEndHandler = () => {
    setTextDisplay("none");
  };

  const list = keyArray.map((e) => (
    <li
      key={e.id}
      className={
        isAnimating === e.id
          ? `${classes.animated} ${classes.listItem}`
          : classes.listItem
      }
    >
      <h1>{e.item}</h1>
      <h5>{e.sound}</h5>
    </li>
  ));

  return (
    <div
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={0}
      onClick={handlerClick}
      className={classes.mainContainer}
    >
      <h1
        style={{ display: textDisplay }}
        className={`${classes.startPlay} ${
          isClicked && classes.textAnimatedStart
        }`}
        onAnimationEnd={animationEndHandler}
      >
        Click Drum For Start{" "}
      </h1>
      <h1
        style={{ display: `${textDisplay === "block" ? "none" : "block"}` }}
        className={`${classes.letsPlay} ${
          isClicked && classes.textAnimatedLets
        }`}
      >
        Let's Play!
      </h1>

      <StarterHero display={textDisplay} isClicked={isClicked} />
      <VoiceBoard
        display={`${textDisplay === "block" ? "none" : "flex"}`}
        isPlaying={isPlaying}
      />
      <Audio />
      <ul className={classes.list}>{list}</ul>
    </div>
  );
}
