//jshint esversion: 6
import React from "react";

const year = new Date();
const currentYear = year.getFullYear();

function Footer() {
  return (
    <div>
      <footer>Copyright &copy; {currentYear} By Gerson Hauwanga</footer>
    </div>
  );
}

export default Footer;
