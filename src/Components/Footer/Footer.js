import React from "react";
import { animateScroll } from "react-scroll";
import { FaLinkedin,  FaInstagram, FaFacebook,FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkTitle,
  FooterLinkItems,
  FooterWrap,
  FooterLinksWrap,
  FooterLinksContainer,
  SocialIconLinks,SocialIcons,SocialMedia,SocialLogo,SocialMediaWrap,WebsiteRights
} from "./FooterStyles";

const Footer = () => {
    const toggleHome = () => {
        animateScroll.scrollToTop();
      };
    


  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrap>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="/signin"> How it works </FooterLink>
              <FooterLink to="/signin"> Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin"> Investors </FooterLink>
              <FooterLink to="/signin">Terms of Service </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Videos </FooterLinkTitle>
              <FooterLink to="/signin"> Submit Videos </FooterLink>
              <FooterLink to="/signin"> Ambassadors</FooterLink>
              <FooterLink to="/signin">Agency</FooterLink>
              <FooterLink to="/signin"> Influencer </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrap>
          <FooterLinksWrap>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us </FooterLinkTitle>
              <FooterLink to="/signin"> Contact </FooterLink>
              <FooterLink to="/signin"> Support</FooterLink>
              <FooterLink to="/signin">Destinations</FooterLink>
              <FooterLink to="/signin"> Sponsorship </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to="/signin">Instagram </FooterLink>
              <FooterLink to="/signin"> Facebook</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin"> Twitter </FooterLink>
              <FooterLink to="/signin">Linkdin </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrap>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} to="/">S-coin</SocialLogo>
            <WebsiteRights>
              s-coin @ {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLinks href="/" target="_blank" aerial-label="Facebook">
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aerial-label="Instagram">
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aerial-label="Youtube">
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aerial-label="Twitter">
                <FaTwitter />
              </SocialIconLinks>
              <SocialIconLinks href="/" target="_blank" aerial-label="Linkedin">
                <FaLinkedin />
              </SocialIconLinks>
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
