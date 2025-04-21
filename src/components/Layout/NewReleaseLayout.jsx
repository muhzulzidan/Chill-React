import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";

import NewRelease from "../Fragments/NewRelease";

const NewReleaseLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[189px] sm:h-[512px] py-4 px-10 sm:px-80 gap-8 mt-6 sm:mt-0">
      <HeadingTitle title="Rilis Baru" />
      <NewRelease />
    </div>
  );
};

export default NewReleaseLayout;
