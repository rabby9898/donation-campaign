import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-white my-8 px-5 md:px-10 lg:px-32">
        <div className="flex-1">
          <Link>
            <img
              className="w-[90px]  md:w-full"
              src="https://i.ibb.co/f4QbCwq/Logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="">
          <ul className="flex gap-3 md:gap-8">
            <li className="text-xs md:text-lg font-medium">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-xs md:text-lg font-medium">
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li className="text-xs md:text-lg font-medium">
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
