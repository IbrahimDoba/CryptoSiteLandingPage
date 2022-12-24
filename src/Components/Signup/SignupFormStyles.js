import styled from "styled-components";

export const SignupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background: linear-gradient(
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.9)
    
  ), url("https://images.pexels.com/photos/6424586/pexels-photo-6424586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SignupWrapper = styled.div`
    background-color: white;
    width: 40%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

   
`;
export const Formclass = styled.div`
    display: flex;
    flex-direction: column;
`;
export const SignupH1 = styled.h1`
    display: flex;
    text-align: center;
    color: black;
`;
export const Signupform = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;
export const SigninInput = styled.input`
    width: 37vw;
    flex: 1;
    margin: 20px 10px 0 0;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #BBBBBB;
    outline: none;
`;
export const SigninBtn = styled.button`
    padding: 10px;
    width: 35%;
    margin-top: 20px;
    background-color: #01bf71;
    cursor: pointer;

`;
