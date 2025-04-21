const WelcomeText = (props) => {
  const { title, text } = props;
  return (
    <div className="flex flex-col justify-center gap-2 w-44 h-16">
      <h3 className="flex justify-center text-lg sm:text-[32px] text-white leading-[35.2px] tracking-[0.2px] font-bold">{title}</h3>
      <p className="flex justify-center text-sm sm:text-base font-normal text-white leading-[22.4px] tracking-[0.2px]">{text}</p>
    </div>
  );
};

export default WelcomeText;
