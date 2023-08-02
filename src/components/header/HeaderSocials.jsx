import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="#" target="_blank">
        <BsLinkedin />
      </a>
      <a href="#" target="_blank">
        <BsGithub />
      </a>
      <a href="#" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
