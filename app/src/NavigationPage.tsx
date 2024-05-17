import React from "react";
// NavigationPage is a component that displays heft links to parts of the page
import "./NavigationPage.css";

function NavigationPage() {
  return (
    <div>
      <div className=" h-screen bg-fallback flex items-center text-white font-serif">
        {" "}
        {/* Menu is not centered */}
        <div
          id="link-container"
          className="group text-8xl flex flex-col gap-y-10 "
        >
          <a href="/" id="links" className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity"> About Me </a>
          <a href="/" id="links" className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity"> Experience </a>
          <a href="/" id="links" className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity"> Projects </a>
          <a href="/" id="links" className="group-hover:opacity-30 group-hover:hover:opacity-100 transition-opacity"> Contact Me </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationPage;
