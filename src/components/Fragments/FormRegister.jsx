import InputForm from "../Elements/Input/index";
import Forgot from "../Elements/Input/Forgot";

const FormRegister = ({ onInputChange, formData, onSubmit,showForgot = true }) => {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      <InputForm
        onSubmit={onSubmit}
        label="Username"
        type="text"
        placeholder="Masukan Username"
        name="username"
        value={formData.username}
        onChange={onInputChange}
        required
      />
      <InputForm
        label="Kata Sandi"
        type="password"
        placeholder="Masukan kata sandi"
        name="password"
        img="/eye-off.png"
        value={formData.password}
        onChange={onInputChange}
        required
      />
      <InputForm
        label="Konfirmasi Kata Sandi"
        type="password"
        placeholder="Masukan kata sandi"
        name="confirmPassword"
        img="/eye-off.png"
        value={formData.confirmPassword}
        onChange={onInputChange}
        required
      />
      {showForgot && <Forgot text="Sudah punya akun?" goto="/login" link1="Masuk"/>}
    </div>
  );
};

export default FormRegister;
