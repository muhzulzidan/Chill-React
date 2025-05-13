import ComponentHero from "./../components/Fragments/ComponentHero.jsx";
import Footer from "./../Components/Fragments/Footer.jsx";
import Navbar from "./../components/Fragments/Navbar.jsx";
import ContinueWatchingSeriesLayout from "./../Components/Layout/ContinueWatchingSeriesLayout.jsx";
import NewReleaseLayout from "./../Components/Layout/NewReleaseLayout.jsx";
import SeriesOfferingLayout from "./../Components/Layout/SeriesOfferingLayout.jsx";
import TopRatingLayout from "./../Components/Layout/TopRatingLayout.jsx";
import TrendingLayout from "./../Components/Layout/TrendingLayout.jsx";

const SeriesPage = () => {
  return <div className="bg-[#181A1C]">
    <Navbar hideLogoText={true}/>
    <ComponentHero heroTitle="Happiness" heroDesc="Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen." heroBg={"bg-series.png"} />
    <ContinueWatchingSeriesLayout />
    <SeriesOfferingLayout />
    <TopRatingLayout />
    <TrendingLayout />
    <NewReleaseLayout />
    <Footer />
  </div>;
};

export default SeriesPage;