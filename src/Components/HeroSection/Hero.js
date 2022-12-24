import React, { useState } from "react";
import video from "../../videos/Datavideo.mp4";
import { Button } from "../Button";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroP,
  HeroH1,
  ArrowForward,
  ArrowRight,
} from "./HeroStyles";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Crypto Trading Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive 200$ in USDT towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
