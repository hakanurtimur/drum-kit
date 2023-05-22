import React, { useState } from "react";
import classes from './logo.module.css'

function Logo() {
  const [isHover, setIsHover] = useState(false)


  const mouseEnterHandler = () => {
    setIsHover(true)
  }
  const mouseLeaveHandler = () => {
    setIsHover(false)
  }

  
  const animationKnobs = {
    transform: isHover ? 'translateY(-30%) rotateX(45deg)' : 'none',
    transition: 'all  0.6s ease'
  }


  return (
    <div className={classes.content} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
    
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4rem"
      height="4rem"
      className={classes.svg}
      viewBox="0 -0.5 17 17"
    >
      <g fill="#fff" fillRule="evenodd" transform="translate(1)">
        <path
          fill="#B01235"
          d="M14.969 5.984c0 .509-.308.922-.687.922H.749c-.379 0-.687-.413-.687-.922 0-.508.308-.922.687-.922h13.533c.379 0 .687.415.687.922zM14.969 14.984c0 .509-.308.922-.687.922H.749c-.379 0-.687-.413-.687-.922 0-.508.308-.922.687-.922h13.533c.379 0 .687.415.687.922zM12.973 8.062H1.996a.997.997 0 00-.996 1v2.844c0 .553.445 1 .996 1h10.977a.997.997 0 00.996-1V9.062c0-.552-.446-1-.996-1z"
          className="si-glyph-fill"
        ></path>
        <g style={animationKnobs} >
        <ellipse
          cx="5.439"
          cy="2.459"
          className="si-glyph-fill"
          rx="1.439"
          ry="1.459"
        ></ellipse>
        <ellipse
          cx="9.439"
          cy="2.459"
          className="si-glyph-fill"
          rx="1.439"
          ry="1.459"
        ></ellipse>
        <path
          
          d="M5.528 2.957a.49.49 0 01-.194-.041L1.251.79C1.033.694.942.457 1.052.262c.106-.195.37-.277.587-.18l4.085 2.126c.218.096.307.333.2.528a.45.45 0 01-.396.221zM9.446 2.957a.49.49 0 00.194-.041L13.723.79c.218-.096.308-.333.199-.528-.107-.195-.37-.277-.587-.18L9.25 2.208c-.218.096-.307.333-.2.528a.45.45 0 00.396.221z"
          className="si-glyph-fill"
        ></path>
        </g>
      </g>
    </svg>
    <div>Coder<div>Drummer</div><span>by Urtimur</span></div>
    </div>
  );
}

export default Logo;