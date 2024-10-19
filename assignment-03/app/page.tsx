import Image from "next/image";
import NavBar from "./components/navBar";

import HeroSection from "./components/hero";
import About from "./components/about";

import Project from "./components/project";

import Footer from "./components/footer";

export default function Home() {
  return (
    <div >
<NavBar/>
<HeroSection/>
<About/>
<Project/>
<Footer/>


    </div>
  );
}
