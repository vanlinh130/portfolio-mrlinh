import About from "@/components/about";
import Contact from "@/components/contact";
import Content from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="">
      <div className="section-center">
        <Header />
        <div className="">
          <Content />
        </div>
        <div className="mt-12 border-t-[1px] border-t-[#767676]">
          <About />
        </div>
        <div className="mt-12 border-t-[1px] border-t-[#767676]">
          <Skills />
        </div>
        <div className="mt-12 border-t-[1px] border-t-[#767676]">
          <Portfolio />
        </div>
        <div className="mt-12 border-t-[1px] border-t-[#767676]">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
