import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsFlower1 } from "react-icons/bs";
import logo from "../../assets/images/logo.png";
import collection2 from "../../assets/images/collection-2.jpg";
import collection3 from "../../assets/images/collection-3.jpg";
import { Link, NavLink } from "react-router";
import useAppSelector from "../../hooks/useAppSelector";
import CheckRole from "../../components/common/CheckRole";

const Header = () => {
  const auth = useAppSelector((state) => state.auth);

  return (
    <section className="bg-[#1a1a2b] relative">
      <div className="flex justify-between py-3 px-8 border-b border-[#2a2a3b] text-sm">
        <div>
          <p className="text-white">
            Order by phone: (84) 943 446 000 | Shop our Spring Bounty Sale
          </p>
        </div>
        <div className="text-white flex gap-8">
          <span className="flex group gap-2 items-center hover:cursor-pointer">
            <p className="font-medium">USD</p>{" "}
            <FaChevronDown className="text-xs mt-0.5 group-hover:mb-0.5" />
          </span>
          <span className="flex group gap-2 items-center hover:cursor-pointer">
            <p className="font-medium">English</p>{" "}
            <FaChevronDown className="text-xs mt-0.5 group-hover:mb-0.5" />
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center px-8 py-6">
        <div className="mr-20">
          <img className="logo hover:cursor-pointer" src={logo} />
        </div>
        <div className="flex justify-between items-center bg-white w-3/6 rounded-sm">
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-black py-3 px-4 outline-0 w-full"
          />
          <div className="bg-[#fa3253] hover:bg-black hover:cursor-pointer transition-all duration-75 rounded-sm w-10 h-10 mr-1 flex items-center justify-center">
            <FaSearch className="text-white" />
          </div>
        </div>
        <div className="flex gap-8 text-white font-medium text-sm">
          <div className="flex items-center gap-3">
            <BiUser className="text-lg" />
            {auth.userInfo ? (
              <button
                onClick={() => null}
                className="hover:text-[#fa3253] hover:cursor-pointer transition-all duration-150"
              >
                {auth.userInfo.user.lastName}
              </button>
            ) : (
              <Link
                to="/login"
                className="hover:text-[#fa3253] hover:cursor-pointer transition-all duration-150"
              >
                Login
              </Link>
            )}
          </div>
          <div className="flex items-center gap-3 relative">
            <FaRegHeart className="text-lg" />
            <p className="hover:text-[#fa3253] hover:cursor-pointer transition-all duration-150">
              Wishlist
            </p>
            <span className="bg-[#fa3253] rounded-full flex justify-center items-center text-xs w-4 h-4 absolute -top-2 -left-2">
              0
            </span>
          </div>
          <div className="flex items-center gap-3 relative">
            <MdOutlineShoppingCart className="text-lg" />
            <p className="hover:text-[#fa3253] hover:cursor-pointer transition-all duration-150">
              Cart
            </p>
            <span className="bg-[#fa3253] rounded-full flex justify-center items-center text-xs w-4 h-4 absolute -top-2 -left-2">
              0
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-8 py-4">
        <div className="text-white mr-60">
          <ul className="list-none flex gap-10">
            <li>
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fa3253] transition-all duration-150 font-medium"
                    : "hover:text-[#fa3253] transition-all duration-150 font-medium"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="chat"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fa3253] transition-all duration-150 font-medium"
                    : "hover:text-[#fa3253] transition-all duration-150 font-medium"
                }
              >
                Chat
              </NavLink>
            </li>
            <div className="">
              <li className="flex items-center gap-2 hover:text-[#fa3253] transition-all duration-150 font-medium">
                <NavLink
                  to="categorie"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#fa3253] transition-all duration-150 font-medium"
                      : "hover:text-[#fa3253] transition-all duration-150 font-medium"
                  }
                >
                  Shop
                </NavLink>
                <FaChevronDown className="text-xs mt-1" />
              </li>
              <div className="hidden gap-8 bg-white shadow-md p-4 text-black absolute -bottom-90">
                <div className="flex flex-col gap-4">
                  <p className="font-medium text-sm">SHOP LAYOUT</p>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Category
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Left
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Right
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Filter Above
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Pagination
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Left Pagination
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Right Pagination
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Filter Above Pagination
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-medium text-sm">SHOP PAGINATION</p>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Pagination
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Left Pagination
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Right Pagination
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Filter Above Pagination
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-medium text-sm">SHOP SCROLL</p>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Category
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Left
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Right
                  </a>
                  <a
                    href="#"
                    className="font-light text-sm hover:text-[#fa3253] transition-all duration-150"
                  >
                    Shop Filter Above
                  </a>
                </div>
                <div>
                  <img
                    className="logo hover:cursor-pointer"
                    src={collection2}
                  />
                </div>
                <div>
                  <img
                    className="logo hover:cursor-pointer"
                    src={collection3}
                  />
                </div>
              </div>
            </div>
            <li>
              <NavLink
                to="product"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fa3253] transition-all duration-150 font-medium"
                    : "hover:text-[#fa3253] transition-all duration-150 font-medium"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fa3253] transition-all duration-150 font-medium"
                    : "hover:text-[#fa3253] transition-all duration-150 font-medium"
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fa3253] transition-all duration-150 font-medium"
                    : "hover:text-[#fa3253] transition-all duration-150 font-medium"
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fa3253] transition-all duration-150 font-medium"
                    : "hover:text-[#fa3253] transition-all duration-150 font-medium"
                }
              >
                Contact
              </NavLink>
            </li>
            <CheckRole requireRole="ADMIN" isPage={false}>
              <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#fa3253] transition-all duration-150 font-medium"
                    : "hover:text-[#fa3253] transition-all duration-150 font-medium"
                }
              >
                Admin
              </NavLink>
            </li>
            </CheckRole>
          </ul>
        </div>
        <div className="flex gap-2 items-center text-white hover:text-[#fa3253] transition-all duration-150 hover:cursor-pointer font-medium">
          <BsFlower1 />
          <p>Shop today's deal</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
