import ComponentHero from "../components/Fragments/ComponentHero";
import Footer from "../Components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import ContinueWatchingFilmLayout from "../Components/Layout/ContinueWatchingFilmLayout";
import NewReleaseLayout from "../Components/Layout/NewReleaseLayout";
import SeriesOfferingLayout from "../Components/Layout/SeriesOfferingLayout";
import TopRatingLayout from "../Components/Layout/TopRatingLayout";
import TrendingLayout from "../Components/Layout/TrendingLayout";

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
