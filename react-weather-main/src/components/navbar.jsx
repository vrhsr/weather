import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from './theme-toggle';

const NavBar = () => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const toggleButton = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <nav className="mb-4 dark:text-white">
      <div className="h-6 w-auto bg-gradient-to-r from-blue-100 via-green-200 to-indigo-400 dark:from-black dark:via-transparent dark:to-gray-700"></div>
      <div className="mx-auto sm:px-6 md:max-w-2xl md:px-0 lg:max-w-4xl lg:px-2 xl:max-w-4xl xl:px-0 2xl:max-w-6xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute flex w-full items-center justify-between px-2 md:hidden">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 bg-green-200 stroke-current text-indigo-500 dark:bg-transparent dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
              <Link to="/">
                <h3 className="ml-1 text-xl font-semibold">Dream Escapes</h3>
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-indigo-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-300 dark:text-white dark:ring-gray-500 dark:hover:bg-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleButton}
            >
              <span className="sr-only">
                {isMenuOpened ? 'Close main menu' : 'Open main menu'}
              </span>
              {isMenuOpened ? (
                <svg
                  className="block h-6 w-6 dark:bg-transparent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 dark:bg-transparent"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:contents">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 bg-green-200 stroke-current text-indigo-500 dark:bg-transparent dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <Link to="/">
              <h3 className="ml-1 text-xl font-semibold">Dream Escapes</h3>
            </Link>
            <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-4">
                 
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/denniskigen/react-weather"
                    className="text-gray-400 transition-colors duration-200 hover:text-gray-500"
                  >
                    <span className="sr-only">React Weather on GitHub</span>
                   
                     
                  </a>
                  <Toggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpened ? (
        <div
          className="mx-auto max-w-2xl px-2 sm:px-6 md:hidden lg:px-2"
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-1 sm:px-2 sm:pt-2 sm:pb-3 md:w-1/2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-400 hover:text-white dark:bg-none dark:text-white dark:hover:bg-gray-600"
              onClick={toggleButton}
            >
              Home
            </Link>
            
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/denniskigen/react-weather"
              className="block rounded-md px-3 py-2 text-base font-medium text-indigo-700 hover:bg-indigo-400 hover:text-white dark:text-white dark:hover:bg-gray-600"
            >
              GitHub
            </a>
          </div>
          <div className="mt-3 border-t border-slate-200 pt-2 dark:border-white">
            <div className="flex items-center justify-between px-3 sm:px-6">
              <label
                htmlFor="theme"
                className="font-normal text-slate-700 dark:text-white "
              >
                Switch theme
              </label>
              <div className="dark:highlight-white/5 relative flex items-center rounded-lg font-semibold text-slate-700 shadow-sm ring-1 ring-slate-900/10 dark:bg-slate-700 dark:text-slate-200">
                <Toggle />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
