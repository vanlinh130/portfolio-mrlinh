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
      <div className="section-center">
        <div className="mt-16">
          <Content />
        </div>
        <div className="mt-12 py-10 bg-[#f1f5f8] dark:bg-[#3b3b3b] rounded-lg">
          <About />
        </div>
        <div className="mt-12 py-10">
          <Skills />
        </div>
        <div className="mt-12  py-10 bg-[#f1f5f8] dark:bg-[#3b3b3b] rounded-lg">
          <Portfolio />
        </div>
        <div className="mt-12">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
