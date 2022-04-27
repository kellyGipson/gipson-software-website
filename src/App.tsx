import "./index.css";
import Logo from "./components/Logo";
import Sun from "./assets/Sun";
import Moon from "./assets/Moon";
import AboutUs from "./components/AboutUs";
import TechUsed from "./components/TechUsed";
import Footer from "./components/Footer";
import DevProcess from "./components/DevProcess";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function App() {

  var screenMiddlePosition: number | undefined;
  var navBarScrollLocation: number | undefined;
  var aboutUsScrollLocation: number | undefined;
  var techUsedScrollLocation: number | undefined;
  var devProcessScrollLocation: number | undefined;
  var contactScrollLocation: number | undefined;
  var currentNavActive: string;
  
  useEffect(() => {
    //initial element positions
    console.log("Setting initial element positions...");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    screenMiddlePosition = (window.outerHeight / 2) + window.scrollY;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    navBarScrollLocation = document.getElementById("navBar")?.getBoundingClientRect().y;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    aboutUsScrollLocation = document.getElementById("aboutUs")?.getBoundingClientRect().y;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    techUsedScrollLocation = document.getElementById("techUsed")?.getBoundingClientRect().y;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    devProcessScrollLocation = document.getElementById("devProcess")?.getBoundingClientRect().y;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    contactScrollLocation = document.getElementById("contact")?.getBoundingClientRect().y;

    const handleScrollNav = () => {
      console.log("scrollY", window.scrollY, "navbar", navBarScrollLocation, "aboutus", aboutUsScrollLocation, "devprocess", devProcessScrollLocation, "techused", techUsedScrollLocation, "contact", contactScrollLocation);
      
      screenMiddlePosition = (window.innerHeight / 2) + window.scrollY;

      console.log(`${screenMiddlePosition} ${window.innerHeight + window.scrollY}`)
      
      if(navBarScrollLocation && aboutUsScrollLocation && techUsedScrollLocation && devProcessScrollLocation && contactScrollLocation) {
        if(window.scrollY > navBarScrollLocation) {
          document.getElementById("navBar")?.classList.add("alt");
        } else document.getElementById("navBar")?.classList.remove("alt");

        document.getElementById(currentNavActive)?.classList.remove("active");
        if(screenMiddlePosition < devProcessScrollLocation) {
          currentNavActive = "About Us";
        } else if(screenMiddlePosition > devProcessScrollLocation && screenMiddlePosition < techUsedScrollLocation) {
          currentNavActive = "Development Process";
        } else if(screenMiddlePosition > techUsedScrollLocation && screenMiddlePosition < contactScrollLocation && (window.innerHeight + window.scrollY) < contactScrollLocation) {
          currentNavActive = "Tech Used";
        } else if((window.innerHeight + window.scrollY) >= contactScrollLocation) {
          currentNavActive = "Contact Us";
        }
        document.getElementById(currentNavActive)?.classList.add("active");
      }
    }

    handleScrollNav()
    
    document.addEventListener("scroll", handleScrollNav);
    return () => document.removeEventListener("scroll", handleScrollNav);
  }, [])

  const [nightModeActive, setNightModeActive] = useState(true);
  const [primaryTextColor, setPrimaryTextColor] = useState("text-neutral-400");
  const [primaryBGColor, setPrimaryBGColor] = useState("bg-neutral-900");
  const [ringColor, setRingColor] = useState("ring-mirage-200");
  const [hrColor, setHRColor] = useState("bg-neutral-800");
  const handleNightMode = () => {
    if(nightModeActive) {
      setPrimaryTextColor("text-neutral-700");
      setPrimaryBGColor("bg-neutral-200");
      setRingColor("ring-violet-300");
      setHRColor("bg-neutral-400")
    } else {
      setPrimaryTextColor("text-neutral-400");
      setPrimaryBGColor("bg-neutral-900");
      setRingColor("ring-mirage-200");
      setHRColor("bg-neutral-800")
    }
    setNightModeActive(!nightModeActive);
  }
  
  return (
    <div className={`flex flex-col place-items-center bg-background-pattern ${primaryTextColor} transition-[color] duration-500`}>
      <Logo />
      <section className={`flex flex-col items-center text-center ${primaryBGColor} sm:w-[95vw] sm:rounded-md lg:max-w-5xl transition-[background-color] duration-500`}
      >
        <div onClick={() => handleNightMode()} className="fixed top-4 right-4 z-50">
          {(nightModeActive) ? <Sun /> : <Moon />}
        </div>  
        <Navbar />
        <AboutUs ringColor={ringColor} hrColor={hrColor}/>
        <DevProcess hrColor={hrColor}/>
        <TechUsed hrColor={hrColor}/>
      </section>
      <Footer />
    </div>
  )
}