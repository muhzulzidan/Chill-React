// src/components/Layouts/TopRatingLayout.jsx
import React from 'react';
import HeadingTitle from "./../Elements/HeadingTitle/HeadingTitle.jsx"; // Pastikan path ini benar
import TopRating from "./../Fragments/TopRating.jsx";       // Pastikan path ini benar

const TopRatingLayout = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1280px] mx-auto py-6 sm:py-10 gap-6"
    >
      <HeadingTitle title="Top Rating Film dan Series Hari ini" />
      <TopRating />
    </div>
  );
};

export default TopRatingLayout;