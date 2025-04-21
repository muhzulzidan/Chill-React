
const Hero = (props) => {
  const { title, description, image } = props;
  return (
    <div className="w-full h-56 sm:h-[587px] flex justify-center relative">
      <div className="relative w-full h-full">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101213DB] to-[#181A1C]"></div>
      </div>
      <div className="absolute w-4/5 h-[118px] sm:h-[233px] gap-3 sm:gap-10 flex flex-col justify-center bottom-8 sm:bottom-20">
        <div className="w-full sm:w-[730px] gap-5">
          <h1 className="text-white text-2xl sm:text-5xl font-bold leading-[52.8px] sm:mb-5">
            {title}
          </h1>
          <p className="truncate md:overflow-visible md:whitespace-normal md:text-clip text-white text-xs sm:text-xl font-medium leading-[25.2px] tracking-[0.2px]">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[221px] sm:w-[350px] flex justify-between items-center gap-2 sm:gap-2.5">
            <button className="border-[#0F1E93] rounded-[48px] bg-[#0F1E93] w-14 sm:w-24 h-6 sm:h-12 text-white text-xs sm:text-base font-bold leading-[22.4px] tracking-[0.2px] py-2.5px px-6.5 ">
              Mulai
            </button>
            <button className="border-[#22282A] bg-[#22282A] rounded-[48px] w-[120px] sm:w-[185px] h-6 sm:h-11 py-2.5 px-6.5 text-white text-xs sm:text-base font-bold leading-[22.4px] tracking-[0.2px] flex justify-center items-center gap-2">
              <img
                className="w-3 sm:w-6 h-3 sm:h-6"
                src="/information.png"
                alt=""
              />
              Selengkapnya
            </button>
            <p className="border border-solid border-[#C1C2C4] rounded-3xl w-7 sm:w-[52px] h-6 sm:h-[45px] p-2.5 gap-2.5 text-white text-xs sm:text-lg leading-[25.2px] tracking-[0.2px] flex justify-center items-center">
              18+
            </p>
          </div>
          <div className="border border-solid border-[#C1C2C4] rounded-3xl w-6 sm:w-11 h-6 sm:h-11 flex justify-center items-center">
            <img
              className="w-3 sm:w-6 h-3 sm:h-6"
              src="/volume-off.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
