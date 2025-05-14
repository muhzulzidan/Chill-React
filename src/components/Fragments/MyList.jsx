import { useEffect } from "react";
import useMyListStore from "../../store/useMyListStore.js";
import useAuthStore from "../../store/useAuthStore.js"; 
import ContainerFilm from "../Elements/Container/ContainerFilm.jsx";
import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle.jsx";

const MyList = () => {
  const { myList, fetchMyList } = useMyListStore();
  const { user } = useAuthStore(); 

  useEffect(() => {
    console.log("User saat ini:", user); 
    if (user?.id) {
      fetchMyList(user.id);
    } else {
      console.error("⚠️ User belum login atau ID tidak tersedia!");
    }
  }, [fetchMyList, user]);
  

  return (
    <div className="flex flex-col justify-center items-center w-full h-full py-6 sm:py-20 sm:my-0 px-2 sm:px-52 gap-4 sm:gap-8">
      <HeadingTitle title="Daftar Saya"  />

      {!user ? (
        <p className="text-gray-400">Silakan login untuk melihat daftar film Anda.</p>
      ) : myList.length === 0 ? (
        <p className="text-gray-400">Belum ada film yang disimpan.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {myList.map((item) => (
            <ContainerFilm key={item.movie_id} movie={item.movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
