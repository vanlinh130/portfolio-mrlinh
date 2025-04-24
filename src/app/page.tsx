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
        <div className="mt-20 bg-[#fffaeb] dark:bg-[#252525]">
          <Content />
        </div>
        <div className="py-10 bg-[#fff] dark:bg-[#3b3b3b] rounded-lg">
          <About />
        </div>
        <div className="py-10 bg-[#f1f5f8] dark:bg-[#252525]">
          <Skills />
        </div>
        <div className="py-10 bg-[#fff] dark:bg-[#3b3b3b] rounded-lg">
          <Portfolio />
        </div>
        <div className="py-10 bg-[#f1f5f8] dark:bg-[#252525]">
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
