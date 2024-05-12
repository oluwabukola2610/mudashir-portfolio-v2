"use client";

import {
  RiTwitterXFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const icons = [
  {
    path: "https://www.linkedin.com/in/mudashir",
    name: <RiLinkedinFill />,
    title: "LinkedIn",
  },
  {
    path: "https://github.com/oluwabukola2610",
    name: <RiGithubFill />,
    title: "GitHub",
  },
  {
    path: "https://twitter.com/Rhoy__b",
    name: <RiTwitterXFill />,
    title: "Twitter X",
  },
  {
    path: "https://www.instagram.com/___rhoy.b/",
    name: <RiInstagramFill />,
    title: "Instagram",
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a
            href={icon.path}
            key={`social-icon-${index}`}
            className={`${iconsStyles}`}
            target="_blank"
            rel="noopener noreferrer"
            title={icon.title}
          >
            {icon.name}
          </a>
        );
      })}
      <a
        href="https://wa.link/kc7kxf"
        className={`${iconsStyles}`}
        target="_blank"
        title="WhatsApp"
      >
        <RiWhatsappFill className="fill-green-400" />
      </a>
    </div>
  );
};

export default Socials;
