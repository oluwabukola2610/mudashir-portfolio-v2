import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import Work from "./Work";

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className=" flex flex-col space-y-3   p-4">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>

        <div className="flex flex-col ">
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="Personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="Personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="Experience">
                  Experience
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="Projects">
                  Projects
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal Tab */}
                <TabsContent value="Personal">
                  <div className="space-y-2">
                    <p className="text-[#b0bed9] max-w-xl mx-auto xl:mx-0">
                      Ever since I discovered the vast world of web development,
                      I have been captivated by the idea of creating immersive
                      online experiences that inspire and engage users. With a
                      strong passion for pixel-perfect designs and an insatiable
                      curiosity for all things tech, I thrive on transforming
                      ideas into interactive realities.
                    </p>
                    <p className="text-[#b0bed9] max-w-xl mx-auto xl:mx-0">
                      <span className="text-[#e6f0ff] font-medium">
                        {" "}
                        But what truly sets me apart?
                      </span>{" "}
                      It's not just about the code, I create impactful
                      experiences through sleek designs, intuitive interfaces,
                      and seamless functionalities. With my commitment to
                      excellence, I can help you achieve your goals and deliver
                      a product that exceeds your expectations.
                    </p>
                    <p className="text-[#b0bed9] max-w-xl mx-auto xl:mx-0">
                      In my free time I like to read📖, research about emerging
                      technogies, play games🎮 and watch movies🎬. Feel free to
                      explore my work and{" "}
                      <span className="text-[#e6f0ff]">connect with me</span>.
                    </p>
                  </div>
                </TabsContent>

                {/* Qualifications Tab */}
                <TabsContent value="Experience">
                  <section>
                    <div className="grid md:grid-cols-[30%_1fr] gap-4 items-start p-4 rounded-md transition-colors duration-300 hover:bg-opacity-50 hover:bg-gray-900 group">
                      <p className="text-[#c8d5ee] text-sm">2023 - Present</p>
                      <div className="flex flex-col items-start space-y-2">
                        <h2 className="text-[#e1f2f3] text-[17px] font-medium transition-colors duration-300 group-hover:text-[#8ae6e9]">
                          Junior Frontend Engineer . VoltWolf LTD
                        </h2>
                        <p className="text-[#b0bed9] text-[14.3px] leading-5">
                          Build and maintain essential frontend components
                          across the entirety of Purscliq. Working closely with
                          diverse teams including developers, product managers,
                          and designers, I advocate for and implement best
                          practices in web accessibility.
                        </p>
                        <div className="flex items-center gap-3 pt-2 flex-wrap">
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            JavaScript
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            TypeScript
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            NextJs
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            SCSS
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            TawilwindCSS
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            Redux
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-[30%_1fr] gap-4 items-start p-4 rounded-md transition-colors duration-300 hover:bg-opacity-50 hover:bg-gray-900 group">
                      <p className="text-[#c8d5ee] text-sm">Feb - March 2024</p>
                      <div className="flex flex-col items-start space-y-2">
                        <h2 className="text-[#e1f2f3] text-[17px] font-medium transition-colors duration-300 group-hover:text-[#8ae6e9]">
                          Frontend Engineer . Gradell technology limited
                          (Contract)
                        </h2>
                        <p className="text-[#b0bed9] text-[14.3px] leading-5">
                          Translated Figma designs into operational code,
                          building and managing an exceptional frontend user
                          interface. I prioritized user and partner satisfaction
                          by delivering exceptional user experiences.
                        </p>
                        <div className="flex items-center gap-3 pt-2 flex-wrap">
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            HTML/SCSS
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            TypeScript
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            NextJs
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            TailwindCss
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-[30%_1fr] gap-4 items-start p-4 rounded-md transition-colors duration-300 hover:bg-opacity-50 hover:bg-gray-900 group">
                      <p className="text-[#c8d5ee] text-sm">
                        June 2023 - Jan 2024
                      </p>
                      <div className="flex flex-col items-start space-y-2">
                        <h2 className="text-[#e1f2f3] text-[17px] font-medium transition-colors duration-300 group-hover:text-[#8ae6e9]">
                          Frontend Engineer . SwiftVia LTD
                        </h2>
                        <p className="text-[#b0bed9] text-[14.3px] leading-5">
                          Collaborated closely with designers, backend
                          developers, and product managers to create captivating
                          web interfaces, focusing strongly on visual
                          attractiveness. They spearheaded the development and
                          maintenance of a high-quality user interface for a
                          logistics startup's frontend website, employing
                          Next.js, CSS libraries, and a variety of frameworks.
                          Additionally, I prioritized customer and partner
                          satisfaction by delivering exceptional user
                          experiences.
                        </p>
                        <div className="flex items-center gap-3 pt-2 flex-wrap">
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            HTML/SCSS
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            JavaScript
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            TypeScript
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            NextJs
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            TailwindCss
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            Redux
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            SEO
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-[30%_1fr] gap-4 items-start p-4 rounded-md transition-colors duration-300 hover:bg-opacity-50 hover:bg-gray-900 group">
                      <p className="text-[#c8d5ee] text-sm">2022</p>
                      <div className="flex flex-col items-start space-y-2">
                        <h2 className="text-[#e1f2f3] text-[17px] font-medium transition-colors duration-300 group-hover:text-[#8ae6e9]">
                          Frontend Developer Intern . Nupat Technologies{" "}
                        </h2>
                        <p className="text-[#b0bed9] text-[14.3px] leading-5">
                          Learnt the basics of web development and worked on
                          personal projects to improve my skills. I revamped
                          website sections to enhance user engagement and
                          optimize user-friendliness. Collaborating closely with
                          UX/UI designers.{" "}
                        </p>
                        <div className="flex items-center gap-3 pt-2 flex-wrap">
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            HTML/SCSS
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            JavaScript
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            SASS
                          </p>
                          <p className="rounded-2xl text-sm text-[#8ae6e9] bg-[#313939] py-1 px-2">
                            TailwindCss
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </TabsContent>

                {/* Skills Tab */}
                <TabsContent value="Projects">
                  <Work />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
