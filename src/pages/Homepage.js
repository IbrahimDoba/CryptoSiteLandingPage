import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useState } from "react";
import Hero from "../Components/HeroSection/Hero";
import InfoSection from "../Components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../Components/InfoSection/Data";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Homepage;
