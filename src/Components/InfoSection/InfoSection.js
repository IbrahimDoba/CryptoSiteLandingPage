import React from "react";
// import img1 from '../../images/img1.png'
import {
  ColumnTwo,
  Img,
  ImgWrap,
  InfoWrapper,
  BtnWrap,
  InfoContainer,
  InfoRow,
  ColumnOne,
  TopLine,
  TextWrapper,
  Subtitle,
  Heading,
} from "./InfoSectionstyles";
import { Button } from "../Button";

const InfoSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  imgStartRow,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  imgStartColumn,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStartColumn={imgStartColumn} imgStartRow={imgStartRow} >
            <ColumnOne>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark = {dark ? 1 : 0}
                  dark2 = {dark2 ? 1 : 0}

                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </ColumnOne>
            <ColumnTwo>
              <ImgWrap>
               <Img  src={img} alt={alt} />
              </ImgWrap>
            </ColumnTwo>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
