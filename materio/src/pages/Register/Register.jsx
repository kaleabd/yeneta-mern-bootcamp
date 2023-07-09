import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../../assets/Logo.png";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ClickableText from "../../components/ClickableText/ClickableText";
import SocialMediaIconsList from "../../components/SocialMediaIconsList/SocialMediaIconsList";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="flex logo-container">
        <img src={MyLogo} alt="" />
        <Title>Materio</Title>
      </div>
      {/* this */}
      <div className="shift-up">
        <div className="">
          <Title>Adventure starts here 🚀</Title>
          <SubTitle>Make your app management easy and fun!</SubTitle>
        </div>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Username"
            handleChange={(val) => console.log(val.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            handleChange={(val) => console.log(val.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            handleChange={(val) => console.log(val.target.value)}
          />
        </div>
        <div className="flex align-items-center justify-content-between">
          <Input
            type="checkbox"
            handleChange={(val) => console.log(val.target.checked)}
            checkboxContent="i Agree to privacy policy & terms"
          />
        </div>
        <div>
          <Button handleButton={() => console.log("login button clicked")}>
            Login
          </Button>
        </div>
        <div className="flex justify-content-center align-items-center">
          <SubTitle>Already have an account?</SubTitle>
          <Link to="/">
            <ClickableText
              label="Sign in instead"
              onClick={() => console.log("sign in account")}
            />
          </Link>
        </div>
      </div>
      <div className="or shift-upper">
        <div className="line"></div>
        <p>or</p>
        <div className="line"></div>
      </div>
      <div className="shift-upper">
        <SocialMediaIconsList
          twitterUrl="https://twitter.com/"
          facebookUrl="https://www.facebook.com/"
          instagramUrl="https://instagram.com"
        />
      </div>
    </div>
  );
};

export default Register;
