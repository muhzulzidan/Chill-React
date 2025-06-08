import { useState } from "react";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

const InputForm = ({ label, name, type, placeholder, img, onChange, value }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        <Input
          name={name}
          type={type === "password" && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
        />

        {type === "password" && img && (
          <img
            src={img} 
            alt="Toggle password visibility"
            className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer"
            onClick={togglePasswordVisibility} 
          />
        )}
      </div>
    </div>
  );
};

export default InputForm;
