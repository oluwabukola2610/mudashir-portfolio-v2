import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import Badge from "./Badge";
import DevImg from "./DevImg";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero  bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <h2 className="text-xl font-semibold text-primary">
                Hi, my name is
              </h2>
              <h1 className="text-3xl md:text-5xl font-extrabold  text-[#c4d1e6]">
                Mudashir Roheemoh
              </h1>
              <h2 className="text-2xl font-medium text-[#c4d1e6]">
                Frontend Web Developer
              </h2>
              <p className="text-[#7587a8] text-lg text-center md:text-left">
                Being a skilled front-end developer, I excel in creating
                user-friendly web interfaces and delivering exceptional digital
                experiences. With a keen sense of design and a love for coding,
                I bring a blend of creativity and precision to every project I
                take on.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col mt-10 gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <a
                href="/assets/MudashirCV.pdf"
                download="mudashir roheemoh Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>

            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years of Experience"
            />

            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[70%] -left-[1rem] p-2"
              icon={<RiTodoFill />}
              endCountNum={10}
              endCountText="+"
              badgeText="Completed projects"
            />

            {/* Badge 3 */}
            <Badge
              containerStyles="absolute top-[50%] -right-12"
              icon={<RiTeamFill />}
              endCountNum={5}
              endCountText="+"
              badgeText="Teams satisfied"
            />

            {/* Image */}
            <div className=" w-[550px] h-[550px] bg-no-repeat relative -top-1 -right-2">
              <DevImg
                imgSrc="/developer-2.svg"
                imgAlt="Hero Dev Image"
                containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
