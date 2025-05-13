import Footer from "../Components/Fragments/Footer.jsx";
import MyList from "../Components/Fragments/MyList.jsx";
import Navbar from "../components/Fragments/Navbar.jsx";

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
