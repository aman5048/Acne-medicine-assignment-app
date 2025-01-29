import React, { useState } from "react";

export const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <>
      <header className="flex sticky top-0 z-50 items-center justify-between p-4 lg:p-6 bg-white shadow-md">
        {/* Logo */}
        <div className="text-xl font-bold lg:text-2xl">LOGO</div>

        {/* Search Bar */}
        <div className="flex-1 mx-4 lg:mx-12 hidden md:block">
          {/* <form className="max-w-md mx-auto">    */}
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              // onChange={(e) => setFilter(e.target.value)}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-green-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-blue-500 dark:bg-grey-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              placeholder="Search "
              required
            />
            {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
          </div>
          {/* </form> */}
        </div>

        {/* Shopping Cart Icon */}
        <div className="lg:mr-12 flex items-center gap-2">
          <div
            onClick={() => setSearch(!search)}
            className="block md:hidden lg:hidden inset-y-0  flex items-center ps-3 pointer "
          >
            <svg
              className="w-4 h-4 text-grey-500 hover:text-blue-500 dark:text-blue-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-8 h-8 lg:w-10 lg:h-10"
            >
              <path
                d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z"
                data-name="Shopping Cart"
              />
            </svg>
          </div>
        </div>
      </header>
      {search && (
        <nav>
          <input
            // onChange={(e) => setFilter(e.target.value)}

            type="search"
            id="default-search"
            className=" sticky top-0 z-50 w-full p-4 ps-10 text-sm text-gray-900 border border-green-300 rounded-lg focus:ring-green-500 focus:border-blue-500 dark:bg-grey-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Search "
            required
          />
        </nav>
      )}
    </>
  );
};
