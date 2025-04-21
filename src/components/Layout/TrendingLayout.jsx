import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
import Trending from "../Fragments/Trending";

const TrendingLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[189px] sm:h-[512px] py-4 px-10 sm:px-80 gap-8 mt-6 sm:mt-0">
      <HeadingTitle title="Film Trending" />
      <Trending />
    </div>
  );
};

export default TrendingLayout;
