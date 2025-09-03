import { Link } from "react-router";

const WelcomePage = () => {
  return (
    <div
      className="text-xl text-white h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/welcome.png')" }}
    >
      <div className="text-center">
        <p className="lg:text-7xl text-3xl md:text-5xl lg:w-[1025px] font-bold">
          Welcome to Extra Handen’s <br />
          <span>AI tool</span>
        </p>
        {/* Button */}
        <div className="flex justify-between gap-50">
          <Link to='/login'  className="btn lg:w-[265px] lg:h-[68px] rounded-full  mt-6 mx-auto flex justify-between items-center px-4 py-2">
            <span className="text-xl">Continue</span>
            <img
              src="/images/rightIcons.png"
              alt="Right Icon"
              className="w-12 h-12 bg-[#13072E] rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
