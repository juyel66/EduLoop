const Button = () => {
  return (
    <div className="flex items-center gap-3 bg-[#E16641] p-2 w-32 lg:w-36 rounded-2xl cursor-pointer">
      <img
        className="bg-white p-1 lg:p-2 rounded-xl"
        src="/images/leftIcons.png"
        alt="back"
      />
      <p className="text-white font-medium">Back</p>
    </div>
  );
};

export default Button;
