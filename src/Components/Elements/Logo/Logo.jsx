const Logo = (props) => {
  const { text = "CHILL", textHide = false } = props;
  return (
    <div className="flex justify-center items-center gap-2 sm:gap-3">
      <img
        className="w-7 sm:w-12 h-6 sm:h-12"
        src="/movie.png"
        alt="Logo Movie"
      />
      <p
        className={`${
          textHide ? "hidden" : "block"
        } sm:block font-londrina text-white text-3xl sm:text-[50px] leading-[55px] font-bold`}
      >
        {text}  
      </p>
    </div>
  );
};

export default Logo;
