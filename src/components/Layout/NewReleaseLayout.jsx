import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle";
import NewRelease from "../Fragments/NewRelease";

const NewReleaseLayout = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1280px] mx-auto py-6 sm:py-10 gap-6">
      <HeadingTitle title="Rilis Baru" />
      <NewRelease />
    </div>
  );
};

export default NewReleaseLayout;