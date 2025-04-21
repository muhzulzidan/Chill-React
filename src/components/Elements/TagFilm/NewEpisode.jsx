const NewEpisode = (props) => {
    const { itemHide = false } = props
    return (
        <div className={`${itemHide ? "hidden" : "block"} absolute top-2 left-2 flex justify-center items-center w-13 sm:w-[107px] h-3.5 sm:h-7 rounded-[24px] py-[2px] sm:py-1 px-[5px] sm:px-2.5 gap-[2px] sm:gap-2 border border-solid border-[#0F1E93] bg-[#0F1E93]`}>
            <p className="text-[6px] sm:text-sm font-bold leading-[8.03px] sm:leading-[19.6px] tracking-[0.1px] sm:tracking-[0.2px] text-white">Episode Baru</p>
        </div>
    )
}

export default NewEpisode