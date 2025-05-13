import HeadingTitle from "../Elements/HeadingTitle/HeadingTitle.jsx"
import SeriesOffering from "../Fragments/SeriesOffering.jsx"

const SeriesOfferingLayout = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-[189px] sm:h-[512px] py-4 px-10 sm:px-80 gap-8 mt-20 sm:mt-0">
            <HeadingTitle title="Series Persembahan Chill" />
            <SeriesOffering />
        </div>
    )
}

export default SeriesOfferingLayout