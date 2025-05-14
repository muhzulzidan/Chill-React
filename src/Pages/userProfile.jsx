import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import useMyListStore from "./../store/useMyListStore";
import useAuthStore from "./../store/useAuthStore";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText.jsx";
import ContainerFilm from "../Components/Elements/Container/ContainerFilm.jsx";
import HeadingTitle from "../Components/Elements/HeadingTitle/HeadingTitle.jsx";
import api from "./../api/axiosConfig";
import Navbar from "../Components/Fragments/Navbar.jsx";
import Footer from "../Components/Fragments/Footer.jsx";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { myList, fetchMyList } = useMyListStore();
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User saat ini:", user);
    if (user?.id) {
      fetchMyList(user.id);
    } else {
      console.error("⚠️ User belum login atau ID tidak tersedia!");
    }
  }, [fetchMyList, user]);

  // Mengupdate nilai input saat diketik
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Fungsi untuk update password
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;

    if (!username || !password || !confirmPassword) {
      toast.error("Harap isi semua field!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Kata sandi tidak cocok!");
      return;
    }

    setIsLoading(true);

    try {
      const { data: users } = await api.get("/users");
      const user = users.find((u) => u.username === username);

      if (!user) {
        toast.error("User tidak ditemukan!");
        setIsLoading(false);
        return;
      }

      // Update password pada user yang sudah ada
      await api.put(`/users/${user.id}`, {
        username: user.username,
        password: password,
        email: user.email,
      });

      toast.success("Kata sandi berhasil diperbarui!");
      setFormData({ username: "", password: "", confirmPassword: "" });

      setTimeout(() => {
        setIsLoading(false);
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Update password error:", error);
      toast.error("Gagal memperbarui kata sandi");
      setIsLoading(false);
    }
  };

  // Fungsi untuk hapus akun
  const handleDeleteAccount = async () => {
    const { username } = formData;

    if (!username) {
      toast.error("Harap isi username untuk menghapus akun!");
      return;
    }

    setIsLoading(true);

    try {
      const { data: users } = await api.get("/users");
      const user = users.find((u) => u.username === username);

      if (!user) {
        toast.error("User tidak ditemukan!");
        setIsLoading(false);
        return;
      }

      await api.delete(`/users/${user.id}`);

      toast.success("Akun berhasil dihapus!");
      setTimeout(() => {
        setIsLoading(false);
        navigate("/register");
      }, 2000);
    } catch (error) {
      console.error("Delete account error:", error);
      toast.error("Gagal menghapus akun");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col justify-center bg-[#181A1C] w-full min-h-screen">
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
      <Navbar />
      <div className="flex flex-col justify-center gap-2 w-full h-full px-4 sm:px-20 mt-12">
        <div className="hidden sm:block">
          <WelcomeText title="Profile Saya" />
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-8 ">
          {/* Form Profile (Di Kiri Saat Desktop, Di Bawah Saat Mobile) */}
          <div className="block sm:hidden">
            <WelcomeText title="Profile Saya" />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col items-start order-1 sm:order-none">
            <div className="flex gap-4 mx-6 sm:mx-0">
              <img
                className="w-20 sm:w-20 h-20 sm:h-20 rounded-full"
                src="/avatar.png"
                alt=""
              />
              <div className="flex flex-col">
                <button className="border border-[#3254FF] text-[#3254FF] rounded-full px-4 h-10 text-sm sm:text-base">
                  Ubah Foto
                </button>
                <div className="flex gap-2 pl-2 pt-4">
                  <img src="upload.svg" alt="" className="w-4 h-4" />
                  <span className="text-[#C1C2C4] text-sm">Maksimal 2MB</span>
                </div>
              </div>
            </div>

            {/* Form Input */}
            <form
              onSubmit={handleUpdatePassword}
              className="mt-8 space-y-8 w-[90%] sm:w-full mx-auto sm:mx-0"
            >
              <fieldset className="relative">
                <label className="absolute text-[#9D9EA1] text-sm sm:text-base z-10 px-4 py-2">
                  Nama Pengguna
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="relative border border-[#E7E3FC3B] bg-[#22282A] text-white text-base sm:text-lg font-medium w-full h-16 px-4 pt-4 rounded-lg"
                />
                <img
                  src="pen.svg"
                  alt="edit"
                  className="absolute right-6 bottom-6"
                />
              </fieldset>

              <fieldset className="relative">
                <label className="absolute text-[#9D9EA1] text-sm sm:text-base z-10 px-4 py-2">
                  Email
                </label>
                <input
                  type="text"
                  className="relative border border-[#E7E3FC3B] bg-[#22282A] text-[#9D9EA1] text-base sm:text-lg font-medium w-full h-16 px-4 pt-4 rounded-lg disabled outline-none pointer-events-none"
                  value="user@example.com"
                  disabled
                />
              </fieldset>

              <fieldset className="relative">
                <label className="absolute text-[#9D9EA1] text-sm sm:text-base z-10 px-4 py-2">
                  Kata Sandi Baru
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="relative border border-[#E7E3FC3B] bg-[#22282A] text-white text-base sm:text-lg font-medium w-full h-16 px-4 pt-4 rounded-lg"
                />
                <img
                  src="pen.svg"
                  alt="edit"
                  className="absolute right-6 bottom-6"
                />
              </fieldset>

              <fieldset className="relative">
                <label className="absolute text-[#9D9EA1] text-sm sm:text-base z-10 px-4 py-2">
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="relative border border-[#E7E3FC3B] bg-[#22282A] text-white text-base sm:text-lg font-medium w-full h-16 px-4 pt-4 rounded-lg"
                />
                <img
                  src="pen.svg"
                  alt="edit"
                  className="absolute right-6 bottom-6"
                />
              </fieldset>

              <div className="flex justify-between w-full">
                <button
                  type="submit"
                  className="bg-[#09147A] rounded-full h-12 w-24 text-white text-base flex items-center justify-center"
                >
                  {isLoading ? "Loading..." : "Simpan"}
                </button>
                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  className="bg-red-600 rounded-full h-12 w-32 text-white text-base flex items-center justify-center"
                >
                  {isLoading ? "Loading..." : "Hapus Akun"}
                </button>
              </div>
            </form>
          </div>

          {/* Kotak Berlangganan (Di Kanan Saat Desktop, Di Atas Saat Mobile) */}

          <div className="w-full sm:w-1/2 flex justify-center sm:justify-end order-first sm:order-none">
            <div className="flex w-[90%] sm:w-[80%] h-60 sm:h-60 bg-[#3D4142] border border-[#3D4142] rounded-2xl py-4 px-8 gap-2 sm:gap-6">
              <img
                src="horn.svg"
                alt=""
                className="w-28 sm:w-16 h-28 sm:h-16"
              />
              <div className="flex flex-col items-end">
                <div>
                  <h4 className="font-bold text-lg sm:text-2xl text-white">
                    Saat ini anda belum berlangganan
                  </h4>
                  <p className="text-sm sm:text-lg text-white mt-4">
                    Dapatkan akses Tak Terbatas ke Ribuan Film dan Series
                    Kesukaan Kamu!
                  </p>
                </div>
                <button className="w-36 sm:w-48 h-12 sm:h-12 text-white rounded-full bg-[#2F3334] mt-4 sm:mt-8 text-xs sm:text-base font-bold">
                  Mulai Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full h-auto py-6 sm:py-20 sm:my-0 px-2 sm:px-24 gap-4 sm:gap-8">
        <HeadingTitle title="Daftar Saya" />

        {!user ? (
          <p className="text-gray-400">
            Silakan login untuk melihat daftar film Anda.
          </p>
        ) : myList.length === 0 ? (
          <p className="text-gray-400">Belum ada film yang disimpan.</p>
        ) : (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {myList.map((item) => (
              <ContainerFilm key={item.movie_id} movie={item.movie} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
