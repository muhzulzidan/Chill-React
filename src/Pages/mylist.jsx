import Footer from "../Components/Fragments/Footer";
import MyList from "../Components/Fragments/MyList";
import Navbar from "../components/Fragments/Navbar";

const MyListPage = () => {
  return (
    <div className="bg-[#181A1C]">
      <Navbar hideLogoText={true} />
      <MyList />
      <Footer />
    </div>
  );
};

export default MyListPage;
