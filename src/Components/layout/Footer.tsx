const Footer = () => {
    return (
        <>
            {/* Mobile Footer */}
            <div className="block md:hidden  p-6 flex flex-col items-center gap-2 rounded-b-3xl">
                <p className="text-sm text-gray-600 text-center">© Extra Handen --- School-safe. No personal data</p>
                <p className="text-sm text-gray-600 text-center underline cursor-pointer">Privacy Policy</p>
            </div>

            {/* Medium Devices Footer */}
            <div className="hidden md:flex lg:hidden  text-gray-700 p-8 flex-col items-center gap-3 rounded-b-3xl">
                <p className="text-base text-center">© Extra Handen --- School-safe. No personal data</p>
                <p className="text-base text-center underline cursor-pointer">Privacy Policy</p>
            </div>

            {/* Large Devices Footer */}
            <div className="hidden lg:flex   text-gray-800 p-10 justify-between gap-6 rounded-b-3xl">
                <p>© Extra Handen --- School-safe. No personal data</p>
                <p className="underline cursor-pointer">Privacy Policy</p>
            </div>
        </>
    );
};

export default Footer;
