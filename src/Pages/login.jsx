import { useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuthStore from "./../store/useAuthStore";
import Button from "../Components/Elements/button/Button.jsx";
import Logo from "../Components/Elements/Logo/Logo.jsx";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText.jsx";
import FormLogin from "../Components/Fragments/FormLogin.jsx";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  // const user = useAuthStore((state) => state.user);
  // const token = useAuthStore((state) => state.token);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      toast.error("Harap isi username dan password!");
      return;
    }

    try {
      setIsLoading(true);
      const response = await api.post("/auth/login", { username, password });
      const { token } = response.data;

      // You can decode the token or fetch user info if needed
      login({ username, token });
      // Log the token and global state after login
      setTimeout(() => {
        console.log('Current Zustand user:', useAuthStore.getState().user);
        console.log('Current Zustand token:', useAuthStore.getState().token);
      }, 0);
      toast.success("Login Berhasil");
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.status === 401) {
        toast.error("Password salah!");
      } else if (error.response && error.response.status === 404) {
        toast.error("User tidak ditemukan!");
      } else {
        toast.error("Terjadi kesalahan, coba lagi nanti.");
      }
    }
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    
    // Simulate Google login with timeout
    setTimeout(() => {
      const demoGoogleUser = {
        username: "Google User",
        email: "google.user@example.com",
        avatar: "https://ui-avatars.com/api/?name=Google+User",
      };
      
      login(demoGoogleUser);
      toast.success("Login dengan Google berhasil!");
      navigate("/home");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="relative flex justify-center items-center bg-bg-login bg-center bg-cover w-full h-screen text">
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex justify-center items-center flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[529px] h-auto md:h-[663px] bg-[#181A1CD6] rounded-2xl p-6 md:p-10 gap-4 sm:gap-6">
        <Logo />
        <WelcomeText title="Masuk" text="Selamat datang kembali" />
        <form className="w-full flex flex-col gap-8" onSubmit={handleLogin} >
          <FormLogin formData={formData} onInputChange={handleInputChange} />
          <Button type="submit" variant="bg-[#3D4142]">
            {isLoading ? "Loading..." : "Masuk"}
          </Button>
        </form>
        <p className="text-[#9D9EA1] text-sm font-medium leading-[19.6px] tracking-[0.2px]">
          Atau
        </p>
        <Button variant="bg-transparent" onClick={handleGoogleSignIn}>
          <img src="/google.png" alt="Google logo" className="h-5 w-5 mr-2" />
          Masuk dengan Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
