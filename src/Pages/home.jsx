import Navbar from "../components/Fragments/Navbar";
import ComponentHero from "../components/Fragments/ComponentHero";
import ContinueWatchingFilmLayout from "../Components/Layout/ContinueWatchingFilmLayout";
import TopRatingLayout from "../Components/Layout/TopRatingLayout";
import TrendingLayout from "../Components/Layout/TrendingLayout";
import NewReleaseLayout from "../Components/Layout/NewReleaseLayout";
import Footer from "../Components/Fragments/Footer";

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
