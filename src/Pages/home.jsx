import Navbar from "../Components/Fragments/Navbar.jsx";
import ComponentHero from "../Components/Fragments/ComponentHero.jsx";
import ContinueWatchingFilmLayout from "../Components/Layout/ContinueWatchingFilmLayout.jsx";
import TopRatingLayout from "../Components/Layout/TopRatingLayout.jsx";
import TrendingLayout from "../Components/Layout/TrendingLayout.jsx";
import NewReleaseLayout from "../Components/Layout/NewReleaseLayout.jsx";
import Footer from "../Components/Fragments/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-[#181A1C] flex flex-col gap-12">
      <Navbar hideLogoText={true} />
      <ComponentHero
        heroTitle="Duty After School"
        heroDesc="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
        heroBg={"bg-main.png"}
      />
      <ContinueWatchingFilmLayout />
      <TopRatingLayout />
      <TrendingLayout />
      <NewReleaseLayout />
      <Footer />
    </div>
  );
};

export default Home;
