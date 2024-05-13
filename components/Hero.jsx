"use client";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Socials from "./Socials";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollToContact, setScrollToContact] = useState(false);

  useEffect(() => {
    if (scrollToContact) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        setScrollToContact(false);
      }
    }
  }, [scrollToContact]);
  return (
    <section className="py-12  md:h-screen flex flex-col space-y-5  justify-center ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center px-2">
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-[#3a8f9e]">
              Hi, my name is
            </h3>
            <h1 className="text-3xl md:text-5xl font-extrabold  text-[#c4d1e6]">
              Mudashir Roheemoh
            </h1>
            <h2 className="text-xl font-medium text-[#c4d1e6]">
              Frontend Web Developer
            </h2>
            <p className="text-[#7587a8] text-lg text-center md:text-left">
              As a dedicated front-end developer, my expertise lies in crafting
              intuitive web interfaces and delivering outstanding digital
              experiences. I possess a strong eye for design and a passion for
              coding, which enables me to infuse creativity and accuracy in
              every project I undertake.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col mt-10 gap-y-3 md:flex-row gap-x-3 mb-12 mx-auto md:mx-0">
            <Button
              onClick={() => setScrollToContact(true)}
              className="gap-x-2"
            >
              Contact Me <Send size={18} />
            </Button>
            <a
              href="/assets/ROHEEMOH-frontend.pdf"
              download="Stephen Adeniji Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </a>
          </div>

          <Socials
            containerStyles="flex gap-x-6 mx-auto md:mx-0 "
            iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
