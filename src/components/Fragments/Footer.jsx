import Logo from "./../Elements/Logo/Logo.jsx";

const Footer = () => {
  return (
    <div className="w-full h-auto text-white py-8 sm:py-[60px] px-6 md:px-20 lg:px-80 gap-5">
      <div className="w-full h-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-6">
        <div className="flex flex-col justify-between items-start gap-2 md:gap-4 lg:gap-6">
          <Logo textHide={false} />
          <p className="font-poppins text-xs md:text-sm lg:text-base font-normal leading-[20.4px] tracking-[0.2px] text-[#C1C2C4]">
            © 2025 Chill. All Rights Reserved
          </p>
        </div>

        <div className="hidden md:flex justify-between items-center h-full md:gap-16 lg:gap-40">
          <div className="flex flex-col justify-between items-start h-full">
            <p className="text-white text-sm md:text-base font-bold leading-[22.4px] tracking-[0.2px]">
              Genre
            </p>
            <div className="flex justify-center items-center gap-5 md:gap-7">
              <div className="flex flex-col gap-3 text-grey text-sm md:text-base font-medium leading-[22.4px] tracking-[0.2px]">
                <p>Aksi</p>
                <p>Anak-anak</p>
                <p>Anime</p>
                <p>Britania</p>
              </div>
              <div className="flex flex-col gap-3 text-grey text-sm md:text-base font-medium leading-[22.4px] tracking-[0.2px]">
                <p>Drama</p>
                <p>Fantasi Ilmiah & Fantasi</p>
                <p>Kejahatan</p>
                <p>KDrama</p>
              </div>
              <div className="flex flex-col gap-3 text-grey text-sm md:text-base font-medium leading-[22.4px] tracking-[0.2px]">
                <p>Komedi</p>
                <p>Petualangan</p>
                <p>Perang</p>
                <p>Romantis</p>
              </div>
              <div className="h-full flex flex-col gap-3 text-grey text-sm md:text-base font-medium leading-[22.4px] tracking-[0.2px]">
                <p>Sains & Alam</p>
                <p>Thriller</p>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col justify-center gap-4">
            <p className="text-white text-sm md:text-base font-bold leading-[22.4px] tracking-[0.2px]">
              Bantuan
            </p>
            <div className="flex flex-col gap-3 text-grey text-sm md:text-base font-medium leading-[22.4px] tracking-[0.2px]">
              <p>FAQ</p>
              <p>Kontak Kami</p>
              <p>Privasi</p>
              <p>Syarat & Ketentuan</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4 md:hidden">
          <div className="flex items-center justify-between w-full">
            <p className="text-white text-sm font-medium leading-[22.4px] tracking-[0.2px]">
              Genre
            </p>
            <img src="/chevron-right.png" alt="Arrow Right" className="h-4 w-3" />
          </div>

          <div className="flex items-center justify-between w-full">
            <p className="text-white text-sm font-medium leading-[22.4px] tracking-[0.2px]">
              Bantuan
            </p>
            <img src="/chevron-right.png" alt="Arrow Right" className="h-4 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
