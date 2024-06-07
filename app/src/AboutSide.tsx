import React from "react";
import "./AboutSide.css";

function AboutSide() {
  return (
    <div className="h-full w-full flex flex-col  items-center gap-8">
          <div className="text-6xl font-serif">
            Hello, I'm <span className="text-[#FFA500]">Umer Khan</span>
          </div>

          <div id="cards">
            <div id="card">
              <div id="card-content">
                <img src=".\headshot.jpg" id="imgd" className="w-[95%]"></img>
              </div>
            </div>
          </div>

          <div
            id="about-me"
            className="w-[80%] text-center text-[1.1vw] "
          >
            <p>
              I'm a Sophomore at the University of Texas pursuing a bachelor's
              degree in Computer Science.
            </p>
            <br />
            <p>
              Since my first coding class in high school, I've been passionate
              about what I can create to share with others. No matter how
              important, silly, or complex the project, I'm always excited to
              learn and grow from the experience.
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
