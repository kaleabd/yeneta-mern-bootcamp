import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import MyLogo from "../../assets/Logo.png";
import "./Login.css";
import SubTitle from "../../components/SubTitle/SubTitle";
import Input from "../../components/Input/Input";
import ClickableText from "../../components/ClickableText/ClickableText";
import Button from "../../components/Button/Button";
import SocialMediaIconsList from "../../components/SocialMediaIconsList/SocialMediaIconsList";

const Login = () => {
  return (
    <div className="login-container">
      <div className="flex logo-container">
        <img src={MyLogo} alt="" />
        <Title>Materio</Title>
      </div>
      {/* this */}
      <div className="shift-up">
        <div className="">
          <Title>Welcome to Materialize! 👋🏻</Title>
          <SubTitle>
            Please sign-in to your account and start the adventure
          </SubTitle>
        </div>
        <div className="input-container">
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
            checkboxContent="Remember me"
          />
          <ClickableText
            label="Forget Password ?"
            onClick={() => console.log("forget password")}
          />
        </div>
        <div>
          <Button handleButton={() => console.log("login button clicked")}>
            Login
          </Button>
        </div>
        <div className="flex justify-content-center align-items-center">
          <SubTitle>New on our platform? </SubTitle>
          <Link to="/register">
            <ClickableText
              label="Create An Account"
              onClick={() => console.log("click an account")}
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

export default Login;
