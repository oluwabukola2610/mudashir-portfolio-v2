import About from "@/components/About";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <section className="md:overflow-y-auto md:h-screen pt-[6rem] pb-[3rem]   p-3 ">
      <About />
      <Contact />
    </section>
  );
}
