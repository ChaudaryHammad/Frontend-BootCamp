import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ScrollToTop from "react-scroll-to-top";
import { MdArrowDropUp } from "react-icons/md";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />

        <ScrollToTop
          smooth
          style={{
            backgroundColor: "#FACC14",
            borderRadius: "50%",
            padding: "2px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          }}
          component={
            <div className="text-black">
              <MdArrowDropUp size={50} className="absolute -top-1 -left-1 " />
            </div>
          }
        />

        <Footer />
      </div>
    </div>
  );
};

export default App;
