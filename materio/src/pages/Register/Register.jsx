import React from "react";
import { Link, useLocation } from "react-router-dom";
import MyLogo from "../../assets/Logo.png";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ClickableText from "../../components/ClickableText/ClickableText";
import SocialMediaIconsList from "../../components/SocialMediaIconsList/SocialMediaIconsList";
import { useForm } from "react-hook-form"
import "./Register.css";
import { Helmet } from "react-helmet";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  // const location = useLocation()
  // console.log('location: ', location);

  return (
    <div className="register-container">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Register page</title>
      </Helmet>
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
        <form onSubmit={handleSubmit(onSubmit)} className="input-form">
          <div className="input-container">
          <input type="text" placeholder="Username" {...register("username", { required: true})} className="input"/>
            <input type="text" placeholder="Email" {...register("email", { required: true})} className="input"/>
            <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 6})} className="input"/>
            {errors.password?.type === 'minLength' && (
              <p role="alert" className="alert">Minimum 6 characters</p>
            ) }
          </div>
          
          <div className="flex align-items-center justify-content-between">
            <div className="checkbox-container">
              <input type="checkbox" {...register("checkbox")}/>
              <ClickableText
              label="agree on terms and policies"
              onClick={() => console.log("agree on terms")}
              />
            </div>

            <ClickableText
              label="Forget Password ?"
              onClick={() => console.log("forget password")}
            />
          </div>
          <Button handleButton={handleSubmit(onSubmit)}>
            Register
          </Button>
        </form>
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
