import React from "react";
import "./AboutSide.css";

function AboutSide() {
  const portraitSrc = `${process.env.PUBLIC_URL}/lulustare.png`;

  return (
    <div className="h-full w-full flex flex-col  items-center gap-8">
          <div className="text-6xl font-serif">
            Hello, I'm <span className="text-[#FFA500]">PersonOOO</span>
          </div>

          <div id="cards">
            <div id="card">
              <div id="card-content">
                <img src={portraitSrc} id="imgd" alt="PersonOOO portrait" />
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

          <div style={{ textAlign: "left", margin: "30px 0" }}>
            <a href="https://utcs-webring.krisub.workers.dev/prev?from=https://umer-k-personooo.github.io/Umer-K-PersonOOO">
              ←
            </a>{" "}
            |{" "}
            <a href="https://krisub.github.io/utcs-webring/">
              <strong>utcs-webring</strong>
            </a>{" "}
            |{" "}
            <a href="https://utcs-webring.krisub.workers.dev/next?from=https://umer-k-personooo.github.io/Umer-K-PersonOOO">
              →
            </a>
          </div>
        </div>
  );
}

export default AboutSide;
