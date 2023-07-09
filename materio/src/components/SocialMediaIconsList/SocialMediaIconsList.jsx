import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./SocialMediaIconsList.css";

const SocialMediaIconsList = ({ twitterUrl, facebookUrl, instagramUrl }) => {
  return (
    <div className="social-container">
      <a href={twitterUrl} className="icons">
        <FaTwitter size={24} />
      </a>
      <a href={facebookUrl} className="icons">
        <FaFacebook size={24} />
      </a>
      <a href={instagramUrl} className="icons">
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialMediaIconsList;
