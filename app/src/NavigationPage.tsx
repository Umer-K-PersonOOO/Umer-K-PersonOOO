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
          className=" text-8xl flex flex-col custom-padding"
        >
          <a href="/"> About Me </a>
          <a href="/"> Experience </a>
          <a href="/"> Projects </a>
          <a href="/"> Contact Me </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationPage;
