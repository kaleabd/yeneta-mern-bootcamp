import React from "react";
import "./Input.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";



const Input = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("firstName")) 
  console.log(watch("lastName"))
  console.log(watch("schoolName"))  
  console.log(errors.schoolName)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" {...register("firstName")} />
      <input type="text" placeholder="Last Name" {...register("lastName")}/>
      <input type="text" placeholder="School Name" {...register("schoolName", { required: true })} />
      {errors.schoolName && <span>This field is required</span>}
      <button type="submit">Send</button>
    </form>
  )









  // const [showPassword, setShowPassword] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);

  // const toggleShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };
  // const handleCheckboxChange = (e) => {
  //   setIsChecked(e.target.checked);
  // };

  
  // return (
  //   <div>
  //     {type === "password" ? (
  //       <div className="password-container">
  //         <input
  //           type={showPassword ? "text" : "password"}
  //           placeholder={placeholder}
  //           onChange={(val) => handleChange(val)}
  //           className="input password"
  //         />
  //         <div className="showpassword">
  //           {showPassword ? (
  //             <FaEye onClick={toggleShowPassword} />
  //           ) : (
  //             <FaEyeSlash onClick={toggleShowPassword} />
  //           )}
  //         </div>
  //       </div>
  //     ) : type === "checkbox" ? (
  //       <div className="checkbox-container">
  //         <input
  //           type={type}
  //           checked={isChecked}
  //           onChange={(val) => {
  //             handleCheckboxChange(val);
  //             handleChange(val);
  //           }}
  //           className="checkbox-input"
  //         />
  //         <p className="checkbox-content">{checkboxContent}</p>
  //       </div>
  //     ) : (
  //       <input
  //         type={type}
  //         placeholder={placeholder}
  //         onChange={(val) => handleChange(val)}
  //         className="input"
  //       />
  //     )}
  //   </div>
  // );
};

export default Input;
