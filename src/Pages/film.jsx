import ComponentHero from "../components/Fragments/ComponentHero.jsx";
import Footer from "../Components/Fragments/Footer.jsx";
import Navbar from "../components/Fragments/Navbar.jsx";
import ContinueWatchingFilmLayout from "../Components/Layout/ContinueWatchingFilmLayout.jsx";
import NewReleaseLayout from "../Components/Layout/NewReleaseLayout.jsx";
import SeriesOfferingLayout from "../Components/Layout/SeriesOfferingLayout.jsx";
import TopRatingLayout from "../Components/Layout/TopRatingLayout.jsx";
import TrendingLayout from "../Components/Layout/TrendingLayout.jsx";

const FilmPage = () => {
  return (
    <div className="bg-[#181A1C]">
      <Navbar hideLogoText={true} />
      <ComponentHero heroTitle="Avatar 3" heroDesc={"Melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.."} heroBg={"bg-film.png"} />
      <ContinueWatchingFilmLayout />
      <SeriesOfferingLayout />
      <TopRatingLayout />
      <TrendingLayout />
      <NewReleaseLayout />
      <Footer />
    </div>
  );
};

export default FilmPage;
