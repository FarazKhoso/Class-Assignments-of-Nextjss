import Image from "next/image";
import Nav from './components/Header/nav'
import Hero from "./components/Hero-Section/hero";
import Footer from "./components/Footer/Footer";
import './components/Footer/style.css'
import './components/Header/style.css'
import './components/Hero-Section/style.css'



export default function Home() {
  return (
    <div className="mt-20">
      <Nav/>
    <Hero/>
    {/* hello world */}
    <Footer/>

    </div>
  );
}
