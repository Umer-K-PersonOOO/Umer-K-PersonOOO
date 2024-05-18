import React from "react";
// NavigationPage is a component that displays heft links to parts of the page
import "./NavigationPage.css";

function NavigationPage() {
  return (
    <div className="relative h-screen bg-fallback text-white font-serif">
      <div className="relative z-10 flex items-center h-full ">
        <div
          id="link-container"
          className="group text-6xl flex flex-col "
        >

          <a
            href="/"
            id="links-about"
            className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity py-6"
          >
            About Me
          </a>
          <a
            href="/"
            id="links-exp"
            className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity py-6"
          >
            Experience
          </a>
          <a
            href="/"
            id="links-proj"
            className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity py-6"
          >
            Projects
          </a>
          <a
            href="/"
            id="links-contact"
            className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity py-6"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div
        className="absolute inset-0 z-0 w-[50%] h-full " //
        id="circle-tile"
      ></div>
      <div
        className="absolute inset-0 z-1 w-[30%] h-full bg-cover bg-center"
        style={{ backgroundImage: `url('/pfptransparent.png')`, backgroundSize: "70%", backgroundRepeat: 'no-repeat'}}
        id="background-image"
        
      ></div>
      
    </div>
  );
}

export default NavigationPage;
