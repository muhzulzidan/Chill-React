import HeadingTitle from "./../Elements/HeadingTitle/HeadingTitle.jsx";
import ContinueWatchingSeries from "./../Fragments/ContinueWatchingSeries.jsx";

const ContinueWatchingSeriesLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[235px] sm:h-[309px] py-5 sm:py-10 px-40 sm:px-80 gap-5 sm:gap-8">
      <HeadingTitle title="Melanjutkan Tonton Series" />
      <ContinueWatchingSeries />
    </div>
  );
};

export default ContinueWatchingSeriesLayout;