import React, { useEffect, useRef } from "react";
import "./intro.scss";
import Typed from "typed.js";


import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Intro() {

  const text = React.useMemo(() => ["Developer !", "Ui Ux designer"], []);
  const divRef = useRef();
  useEffect(() => {
    const options = {
      strings: text,
      stringsElement: "#typed-string",
      typeSpeed: 100,
      showCursor: true,
      cursorChar: "|",
      backSpeed: 20,
      smartBackspace: false,
      shuffle: true,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity
    };

    const typed = new Typed(divRef.current, options);

    return () => {
      typed.destroy();
    };
   
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/bg.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Obikoru Emeka Daniel</h1>
          <h3>
            Freelance <span ref={divRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon
            style={{
              fontSize: "65px",
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Intro;
