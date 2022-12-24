import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    background-color: #101522;

`
export const FooterWrap = styled.div`
    display: flex;
    padding: 48px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width:820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrap = styled.div`
    display: flex;

    @media screen and (max-width:820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: center;
    width: 180px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width:420px) {
        margin: 0;
        padding: 10px;
        width: 160px;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin-bottom: 14px;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-in-out;
    }
`
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width:860px){
            flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 26px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLinks = styled.a`
    color: #fff;
    font-size: 24px;
`