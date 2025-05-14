const Input = (props) => {
  const { type, placeholder, name, onChange, value } = props;
  return (
    <input
      type={type}
      className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto my-1 h-12 py-3.5 px-3.5 text-sm sm:text-lg text-white border border-solid border-[#E7E3FC3B] rounded-3xl gap-2.5 bg-transparent"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default Input;
