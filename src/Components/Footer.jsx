import React from "react";
import Container from "../Layout/Container";

const Footer = () => {
  var dt = new Date();
  const year = dt.getFullYear();
  return (
    <Container>
      <div className="bg-lightModeSecondary dark:bg-Main  py-6 text-center">
        <div className="container flex flex-col justify-center items-center   text-sm space-y-2 lg:flex-row lg:space-x-4 lg:items-end ">
          <h1 className="italic">
            Proudly built by{" "}
            <span className="text-subtext not-italic">Yoshi</span>
          </h1>
          <h1 className="italic">
            Made by{" "}
            <span className="text-subtext not-italic">Yoshilyn Fujitani</span>
          </h1>
          <h1>©{year}</h1>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
