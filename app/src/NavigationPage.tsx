import React from "react";
// NavigationPage is a component that displays heft links to parts of the page
import "./NavigationPage.css";
import AboutSide from "./AboutSide";

function NavigationPage() {
  return (
    <div className="relative h-screen bg-fallback text-white font-serif flex ">
      <div className="w-1/2 ">
        <div className="relative z-10 flex items-center h-full w-1/2 ">
          <div
            id="link-container"
            className="group text-6xl flex flex-col min-w-[400px] w-[50%]"
          >
            <button
              // href="/"
              id="links-about"
              className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity py-6 text-left"
            >
              About Me
            </button>
            <button
              // href="/"
              id="links-exp"
              className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity py-6 text-left"
            >
              Experience
            </button>
            <button
              // href="/"
              id="links-contact"
              className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity py-6 text-left"
            >
              Contact Me
            </button>
            <a
              href="/"
              id="links-proj"
              className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity py-6 text-left"
            >
              Projects
            </a>
          </div>
        </div>
        <div
          className="absolute inset-0 z-0 w-[50%] h-full " //
          id="circle-tile"
        ></div>
        <div
          className="absolute inset-0 z-1 w-[30%] h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/pfptransparent.png')`,
            backgroundSize: "70%",
            backgroundRepeat: "repeat-y",
          }}
          id="background-image"
        ></div>
      </div>

      <div className="h-full w-1/2 py-10">
        {/* Put personal info about me */}
        <AboutSide />
        
      </div>
    </div>
  );
}

export default NavigationPage;
