
const Navbar = () => {
    return (
        <div>
           <div
           style={{ backgroundImage: "url('/images/navbarImg.png')" }} 
           className="navbar text-xl rounded-b-4xl   text-white z-50 bg-no-repeat bg-cover flex items-center justify-center">
  <div className="navbar-start">
    <div className="dropdown">

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            {/* li list  */}
       
      </ul>
    </div>
   
    <img className="lg:ml-10 md:ml-10" src="/public/images/Logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        {/* li list  */}

    </ul>
  </div>
  <div className="navbar-end">
    <img className="lg:mr-5 md:mr-5"  src="/public/images/notificationIcons.png" alt="" />

  </div>
</div>
            
        </div>
    );
};

export default Navbar;