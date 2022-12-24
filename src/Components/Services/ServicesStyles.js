import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width:768px) {
        height: 1100px;
    }
    @media screen and (max-width:1000px) {
        height: 1300px;
    }

`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 50px;

    @media screen and (max-width:1300px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
    }
    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
    }
`   

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 30px;
    max-height: 340px;
    max-width: 100%;
    padding: 30px;
    margin: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;

    &:hover{
        transform: scale(1.02) ;
        transition: all  0.2s ease-in-out;
        cursor:pointer;
    }

    @media screen and (max-width:1300px) {
        max-width: 400px;

    }
    @media screen and (max-width:997px) {
        max-width: 500px;

    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 180px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size:35px;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width:480px) {
        font-size: 16px;
    }
`
export const ServicesH2 = styled.h2`
    font-size:18px;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 16px ;
    text-align: center;
`   