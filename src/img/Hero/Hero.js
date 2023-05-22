import { useState } from "react";
import classes from "./Hero.module.css";
import HeroDrum from "./HeroDrum";
import HeroKeyboard from "./HeroKeyboard";

export default function Hero() {
  const [isHover, setIsHover] = useState(false);

  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={classes.container}
    >
      <div className={classes.imgContainer}>
        <HeroDrum isHover={isHover}></HeroDrum>
        <HeroKeyboard isHover={isHover}></HeroKeyboard>
      </div>
      <br />
      <div className={classes.description}>
        Where rhythm comes alive! Tap into your musical talents and explore the
        world of percussion like never before. Get ready to drum up some
        excitement and let the beats take you away!
        <br></br>
      </div>
    </div>
  );
}
