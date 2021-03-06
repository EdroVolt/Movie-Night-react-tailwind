import { Fragment, useContext } from "react";
import { useSelector } from "react-redux/es/exports";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { LanguageContext } from "../../App";

export default function Navbar() {
  const favorites = useSelector((state) => state.favorites);
  const { language, setLanguage } = useContext(LanguageContext);

  const handelLangaugeChange = () => {
    language === "en" ? setLanguage("ar") : setLanguage("en");
  };

  return (
    <Disclosure as="nav" className="bg-gray-900 mb-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="brand flex-shrink-0 flex items-center text-yellow-300 text-4xl font-bold">
                  <Link to="/"> Movie Night </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/movies"
                      className={({ isActive }) =>
                        "px-3 py-2 rounded-md text-sm font-medium" +
                        (isActive
                          ? " border-b-2 text-green-300"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white")
                      }
                    >
                      Movies
                    </NavLink>

                    <NavLink
                      to="/favourites"
                      className={({ isActive }) =>
                        "px-3 py-2 rounded-md text-sm font-medium relative " +
                        (isActive
                          ? " border-b-2 text-green-300"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white")
                      }
                    >
                      Favourite
                      <span className="absolute text-white px-1 rounded-full text-xs top-0 right-1 bg-yellow-900">
                        {favorites.length}
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <input
                  type="search"
                  className="hidden md:inline form-control px-3 py-1 text-base font-normal text-gray-700 bg-gray-600 bg-clip-padding border border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray- focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

                <button
                  onClick={handelLangaugeChange}
                  className="text-gray-300 ml-2 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {language}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as={Link}
                to="/"
                className="bg-gray-900 text-white block"
              >
                Movies
              </Disclosure.Button>

              <Disclosure.Button
                as={Link}
                to="/favourites"
                className="text-gray-300 relative hover:bg-gray-700 hover:text-white inline-block mt-2 py-2 rounded-md text-base font-medium"
              >
                Favourite
                <span className="absolute text-white px-1 rounded-full text-xs top-0 -right-2 bg-yellow-900">
                  {favorites.length}
                </span>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
