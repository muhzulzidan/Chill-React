import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
import Trending from "../Fragments/Trending";

const TrendingLayout = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1280px] mx-auto py-6 sm:py-10 gap-6">
      <HeadingTitle title="Film Trending" />
      <Trending />
    </div>
  );
};

export default TrendingLayout;
