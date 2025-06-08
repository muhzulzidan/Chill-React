import Logo from "../Elements/Logo/Logo.jsx";

const Footer = () => {
  return (
    <footer className="w-full bg-[#18181B] text-white py-8">
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-6 px-4">
        {/* Logo and Copyright */}
        <div className="flex flex-col justify-between items-start gap-2 md:gap-4 lg:gap-6 mb-6 md:mb-0">
          <Logo textHide={false} />
          <p className="font-poppins text-xs md:text-sm lg:text-base font-normal leading-[20.4px] tracking-[0.2px] text-[#C1C2C4]">
            © 2025 Chill. All Rights Reserved
          </p>
        </div>

        {/* Desktop Genre & Bantuan */}
        <div className="hidden md:grid grid-cols-4 gap-12 flex-1">
          {/* Genre Columns */}
          <div className="flex flex-col">
            <p className="text-white text-sm md:text-base font-bold mb-3">Genre</p>
            <div className="flex flex-col gap-3 text-grey text-sm md:text-base font-medium">
              <p>Aksi</p>
              <p>Anak-anak</p>
              <p>Anime</p>
              <p>Britania</p>
            </div>
          </div>
          <div className="flex flex-col mt-8 md:mt-11">
            <div className="flex flex-col gap-3 text-grey text-sm md:text-base font-medium">
              <p>Drama</p>
              <p>Fantasi Ilmiah & Fantasi</p>
              <p>Kejahatan</p>
              <p>KDrama</p>
            </div>
          </div>
          <div className="flex flex-col mt-8 md:mt-11">
            <div className="flex flex-col gap-3 text-grey text-sm md:text-base font-medium">
              <p>Komedi</p>
              <p>Petualangan</p>
              <p>Perang</p>
              <p>Romantis</p>
              <p>Sains & Alam</p>
              <p>Thriller</p>
            </div>
          </div>
          {/* Bantuan Section */}
          <div className="flex flex-col">
            <p className="text-white text-sm md:text-base font-bold mb-3">Bantuan</p>
            <div className="flex flex-col gap-3 text-grey text-sm md:text-base font-medium">
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
    </footer>
  );
};

export default Footer;
