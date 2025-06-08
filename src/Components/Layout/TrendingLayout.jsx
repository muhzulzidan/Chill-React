import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle.jsx";
import Trending from "../Fragments/Trending.jsx";

const TrendingLayout = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1280px] mx-auto py-6 sm:py-10 gap-6 container px-4">
      <HeadingTitle title="Film Trending" />
      <Trending />
    </div>
  );
};

export default TrendingLayout;
