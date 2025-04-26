import About from "@/layouts/about";
import Contact from "@/layouts/contact";
import Content from "@/layouts/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Skills from "@/layouts/skills";
import Portfolio from "@/layouts/portfolio";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="">
        <div id='home' className="bg-[#fffaeb] dark:bg-[#252525] py-16 ">
          <Content />
        </div>
        <div id="about" className="bg-[#fff] dark:bg-[#3b3b3b] py-16">
          <About />
        </div>
        <div id="skills" className="bg-[#f1f5f8] dark:bg-[#252525] py-16">
          <Skills />
        </div>
        <div id="portfolio" className="bg-[#fff] dark:bg-[#3b3b3b] py-16">
          <Portfolio />
        </div>
        <div id="contact" className="bg-[#f1f5f8] dark:bg-[#252525] py-16">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
