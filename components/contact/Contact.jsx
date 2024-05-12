import Form from "@/components/Form";
import { MailIcon, HomeIcon } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <h2 className="section-title  mb-8 xl:mb-16 text-center mx-auto">
              Let's work together!{" "}
            </h2>
            <p className="text-[#b0bed9] text-center">
              Feel free to reach out to me for collaboration, inquiries, or just
              to say hi. <br /> I look forward to hearing from you!
            </p>
          </div>
          {/* Image */}
        </div>
          <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
            <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
              <div className="flex items-center gap-x-8 text-[#b0bed9] ">
                <MailIcon size={18} className="text-primary" />
                <div>
                  <a
                    href="mailto:roheemohmudashirn@gmail.com"
                    className="hover:text-primary transition duration-300"
                  >
                    roheemohmudashirn@gmail.com{" "}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-x-8 text-[#b0bed9] ">
                <HomeIcon size={18} className="text-primary" />
                <div>Lagos, Nigeria</div>
              </div>
            </div>

            <Form />
          </div>
        </div>
    </section>
  );
};

export default Contact;