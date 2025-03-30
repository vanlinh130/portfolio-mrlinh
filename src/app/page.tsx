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
      <div className="">
        <Header/>
        <div className="section-center">
          <Content/>
          <About/>
          <Skills/>
          <Portfolio/>
          <Contact/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
