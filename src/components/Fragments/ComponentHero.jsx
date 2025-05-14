import Hero from "../Elements/Hero/Hero.jsx";

const ComponentHero = ({ heroTitle, heroDesc, heroBg }) => {
  return (
    <div className="w-full h-56 sm:h-[587px] flex justify-center">
      <Hero 
      title={heroTitle}
      description={heroDesc}
      image={heroBg}
      />
    </div>
  );
};

export default ComponentHero;
