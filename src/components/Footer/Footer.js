import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <h4>
        COVID-19 Tracking Data provided by the
        <a href="http://covidtracking.com"> covidtracking.com</a> API.
      </h4>
      <h5>Developed by Danny Hogan - 2020</h5>
    </footer>
  );
};
export default Footer;
