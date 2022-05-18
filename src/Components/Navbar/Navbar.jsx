import { List, Moon, Sun, X } from "phosphor-react";

import { Disclosure } from "@headlessui/react";

import { useTheme } from "../hooks/useTheme/useTheme";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Team", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Calendar", href: "#" },
];

export function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { theme, setTheme } = useTheme();
  return (
    <Disclosure as="nav" className="bg-gray-800 shadow-bottom">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X
                      className="block h-6 w-6 text-dark dark:text-graylight"
                      aria-hidden="true"
                    />
                  ) : (
                    <List
                      className="bblock h-6 w-6 text-dark dark:text-graylight"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-medium text-dark dark:text-blue ">
                  Portfólio
                </span>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4  text-dark dark:text-graylight">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-lg font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="darkmode">
                {/* DarkMode */}
                {theme === "dark" ? (
                  <Sun
                    color="#fff"
                    size={25}
                    onClick={() =>
                      theme === "light" ? setTheme("dark") : setTheme("light")
                    }
                    className="cursor-pointer ml-auto"
                  />
                ) : (
                  <Moon
                    size={25}
                    onClick={() =>
                      theme === "light" ? setTheme("dark") : setTheme("light")
                    }
                    className="cursor-pointer ml-auto"
                  />
                )}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "text-dark dark:text-light hover:bg-graylight hover:text-dark dark:hover:text-dark",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
