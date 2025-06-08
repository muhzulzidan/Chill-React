import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle.jsx"; // Pastikan path ini benar
import ContinueWatchingFilm from "../Fragments/ContinueWatchingFilm.jsx"; // Pastikan path ini benar

const ContinueWatchingFilmLayout = () => {
  return (

    <div className="flex flex-col items-center w-full max-w-[1280px] mx-auto h-[162px] pt-10 pb-10 gap-6 mb-20 container px-4">
      <HeadingTitle title={"Melanjutkan Tonton Film"} />
      <div className="w-full px-8"> 
        <ContinueWatchingFilm />
      </div>
    </div>
  );
};

export default ContinueWatchingFilmLayout;