import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(()=>{ })
        .catch(error => console.log(error))
      }
  const navOptions = (
    <>
      <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-green-800 text-white font-semibold px-4 py-2 rounded" : "px-4 py-2"}>Home</NavLink>
      <NavLink to="/plans" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-green-800 text-white font-semibold px-4 py-2 rounded" : "px-4 py-2"}>Our Plans</NavLink>
      {
        user && <NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active bg-green-800 text-white font-semibold px-4 py-2 rounded" : "px-4 py-2"}>DashBoard</NavLink>
      }
    </>
  );

  return (
    <>
      <div className="navbar top-0 fixed z-10 bg-opacity-40 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-10" src="https://i.ibb.co/Qk50f9F/time-management.png" />
          <a className="text-xl font-bold">SCC TECHNOVISION Inc.</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* login info */}
        <div className="navbar-end md:pr-16">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                {
                  user?.email ? <>
                  <img src={user?.photoURL} alt="" />
                  </>
                  :
                  <>
                  <img src="https://i.ibb.co/cxddwLx/placeholder.jpg" alt="" />
                  </>
                }
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black bg-opacity-40 text-white rounded-box w-52">
              {
                user?.email ? <>
                  <p className="justify-between pl-3">{user?.displayName}</p>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
                </>
                : 
                <>
                <li><Link to="/login">Login</Link></li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;