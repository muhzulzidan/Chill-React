import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuthStore from "../store/useAuthStore";
import Button from "../components/Elements/button/Button.jsx";
import Logo from "../components/Elements/Logo/Logo.jsx";
import WelcomeText from "../components/Elements/WelcomeText/WelcomeText.jsx";
import FormLogin from "../components/Fragments/FormLogin.jsx";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
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
    const { username } = formData;

    if (!username) {
      toast.error("Harap isi username!");
      return;
    }

    try { 
      setIsLoading(true);
      
      // Simulate API call with timeout
      setTimeout(() => {
        // Demo user data
        const demoUser = {
          username: username,
          email: `${username}@example.com`,
          avatar: "https://ui-avatars.com/api/?name=" + username,
        };
        
        toast.success("Login Berhasil");
        login(demoUser);
        
        setIsLoading(false);
        navigate("/home");
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Terjadi kesalahan, coba lagi nanti.");
      setIsLoading(false);
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
