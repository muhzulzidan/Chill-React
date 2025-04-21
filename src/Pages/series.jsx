import ComponentHero from "../components/Fragments/ComponentHero";
import Footer from "../Components/Fragments/Footer";
import Navbar from "../components/Fragments/Navbar";
import ContinueWatchingSeriesLayout from "../Components/Layout/ContinueWatchingSeriesLayout";
import NewReleaseLayout from "../Components/Layout/NewReleaseLayout";
import SeriesOfferingLayout from "../Components/Layout/SeriesOfferingLayout";
import TopRatingLayout from "../Components/Layout/TopRatingLayout";
import TrendingLayout from "../Components/Layout/TrendingLayout";

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