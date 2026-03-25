import React from "react";
import "./AboutSide.css";

function AboutSide() {
  return (
    <div className="h-full w-full flex flex-col  items-center gap-8">
          <div className="text-6xl font-serif">
            Hello, I'm <span className="text-[#FFA500]">PersonOOO</span>
          </div>

          <div id="cards">
            <div id="card">
              <div id="card-content">
                <img src="/lulustare.png" id="imgd" alt="PersonOOO portrait" />
              </div>
            </div>
          </div>

          <div
            id="about-me"
            className="w-[80%] text-center text-[1.1vw] "
          >
            <p>
              Hi yall!
            </p>
            <br />
            <p>
              The site is under construction, it'll just be projects (art and code) that I like though.
            </p>
            <br />
            <p>
              Feel free to explore my projects below or get in touch with me for
              collaborations. (Even if it's just to chat!)
            </p>
          </div>
        </div>
  );
}

export default AboutSide;
