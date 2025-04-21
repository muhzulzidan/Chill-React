import InputForm from "../Elements/Input/index";
import Forgot from "../Elements/Input/Forgot";

const FormLogin = ({ formData, onInputChange, onSubmit }) => {
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
      <Forgot
        text="Belum punya akun?"
        goto="/register"
        link1="Daftar"
        link2="Lupa kata sandi?"
      />
    </div>
  );
};

export default FormLogin;
