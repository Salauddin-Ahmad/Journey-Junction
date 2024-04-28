import { useEffect, useState } from "react";
// import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../firebase/useAuth";
import { FaRegUserCircle } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useAuth() || {};

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToogle = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else setTheme("light");
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 border  rounded-lg border-[#58d4db77] bg-[#303b43f5]  font-bold mr-2 bg"
            : "font-bold mr-2"
        }
      >
        <span className="p-2 text-lg font-bold">Home</span>
      </NavLink>

      <NavLink
        to="/addspots"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 border  rounded-lg border-[#58d4db77] bg-[#303b43f5]  font-bold mr-2 bg"
            : "font-bold mr-2"
        }
      >
        <span className="p-2 text-lg font-bold">Add</span>
      </NavLink>

      <NavLink
        to="/allspots"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 border rounded-lg border-[#58d4db77] bg-[#303b43f5]  font-bold mr-2 bg"
            : "font-bold mr-2"
        }
      >
        <span className="p-2 text-lg font-bold">All Tourist spot</span>
      </NavLink>
      <NavLink
        to="/myList"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 border rounded-lg border-[#58d4db77] bg-[#303b43f5]  font-bold mr-2 bg"
            : "font-bold mr-2"
        }
      >
        <span className="p-2 text-lg font-bold">My List</span>
      </NavLink>
    </>
  );

  const loginAndOut = (
    <>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 border rounded-lg border-[#58d4db77] bg-[#303b43f5]  font-bold mr-2 bg"
            : "font-bold mr-2"
        }
      >
        <span className="p-2 text-lg font-bold">Login</span>
      </NavLink>

      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 border rounded-lg  border-[#58d4db77] bg-[#303b43f5]  font-bold mr-2 bg"
            : "font-bold mr-2"
        }
      >
        <span className="p-2 text-lg font-bold">Register</span>
      </NavLink>
    </>
  );

  return (
    <>
      <div className="navbar border border-b-2 mb-5 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              {loginAndOut}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-4xl font-bold hover:text-yellow-400 transition-transform hover:scale-105"
          >
            <span className="text-4xl">JourneyJunction</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks} </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-3">
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleToogle}
                type="checkbox"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {user ? (
            <>
              <button
                onClick={() => logOut()}
                className="bg-[#303b43f5]
                 border border-[#58d4db77] text text-red-400 px-2 py-1 rounded-lg"
              >
                <span className="text-base  font-bold">Sign Out</span>
              </button>

              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                data-tooltip-id="avatarTooltip"
                data-tooltip-content={user?.displayName}
              >
                <div className="w-10 rounded-full text-center flex items-center justify-center">
                  {user ? (
                    <img
                      className="w-10 rounded-full"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  ) : (
                    <FaRegUserCircle className=" text-[41px]" />
                  )}
                </div>
              </div>
            </>
          ) : (
            <>{loginAndOut}</>
          )}
        </div>
      </div>
      <Tooltip id="avatarTooltip" place="bottom" effect="solid" />
    </>
  );
};

export default Navbar;
