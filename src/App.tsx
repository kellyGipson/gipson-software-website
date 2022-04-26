import "./index.css";
import Logo from "./components/Logo";
import AboutUs from "./components/AboutUs";
import TechUsed from "./components/TechUsed";
import Footer from "./components/Footer";
import DevProcess from "./components/DevProcess";
import Navbar from "./components/Navbar";

export default function App() {
  
  return (
    <div className="flex flex-col place-items-center bg-background-pattern text-neutral-400">
      <Logo />
      <section className="flex flex-col items-center text-center w-screen bg-neutral-900
                          sm:w-[95vw] sm:rounded-md
                          lg:max-w-5xl">
        <Navbar />
        <AboutUs />
        <DevProcess />
        <TechUsed />
      </section>
      <Footer />
    </div>
  )
}