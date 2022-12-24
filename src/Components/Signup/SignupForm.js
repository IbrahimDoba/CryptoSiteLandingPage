import React from "react";
import {
  Formclass,
  SigninBtn,
  SigninInput,
  SignupContainer,
  SignupH1,
  SignupWrapper,
} from "./SignupFormStyles";

const Signupform = () => {
  return (
    
    <SignupContainer>
      <SignupWrapper>
        <SignupH1>SIGN UP HERE!</SignupH1>

        <Formclass>
          <SigninInput placeholder="Username" />
          <SigninInput placeholder="Fullname" />
          <SigninInput placeholder="Email" type="email" />
          <SigninInput placeholder="Passoword" type="passoword"/>
          <SigninInput placeholder="Confirm Password" type="passoword"/>
        </Formclass>

        <SigninBtn>REGISTER</SigninBtn>
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signupform;
