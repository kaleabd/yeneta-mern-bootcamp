import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import Title from "../../components/Title/Title";
import MyLogo from "../../assets/Logo.png";
import "./Login.css";
import SubTitle from "../../components/SubTitle/SubTitle";
import Input from "../../components/Input/Input";
import ClickableText from "../../components/ClickableText/ClickableText";
import Button from "../../components/Button/Button";
import SocialMediaIconsList from "../../components/SocialMediaIconsList/SocialMediaIconsList";

const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);
  
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
        <form onSubmit={handleSubmit(onSubmit)} className="input-form">
          <div className="input-container">
            <input type="text" placeholder="Email" {...register("email")} className="input"/>
            <input type="password" placeholder="Password" {...register("password")} className="input"/>
           

          </div>
          
          <div className="flex align-items-center justify-content-between">
            <div className="checkbox-container">
              <input type="checkbox" {...register("checkbox")}/>
              <ClickableText
              label="Remember me"
              onClick={() => console.log("remember me")}
              />
            </div>

            <ClickableText
              label="Forget Password ?"
              onClick={() => console.log("forget password")}
            />
          </div>
          <Button handleButton={handleSubmit(onSubmit)}>
            Login
          </Button>
        </form>

        <div className="flex justify-content-center align-items-center">
          <SubTitle>New on our platform? </SubTitle>
          <Link to="/register" state={{name: 'Kaleab Dereje'}}>
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
