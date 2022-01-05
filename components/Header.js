import Link from 'next/link';
import { useTheme } from 'next-themes';
const Header = () => {
  const {theme, setTheme} = useTheme();
  return(
  <div className="Header bg-white  shadow">
    <div className="container mx-auto">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 h-12 w-12 order-2 md:order-3 absolute left-2/4 transform -translate-x-2/4 lg:transform-none md:relative md:left-0"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >test
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="h-6 w-6 text-gray-800 dark:text-gray-200"
        >
          {theme === 'dark' ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      </button>
      <nav className="flex flex-wrap items-center justify-between p-4 ">
        <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
          <a
            className="text-xl text-indigo-600 font-semibold font-heading"
            href="#"
            data-config-id="brand"
          >
            Lax Mariappan
          </a>
        </div>
        <div className="block lg:hidden">
          <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
          <Link href="/">
            <a className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="inline-block py-4 px-8 mr-6 leading-none text-indigo-700 bg-white font-semibold rounded shadow">
              About
            </a>
          </Link>
        </div>
      </nav>
    </div>
  </div>
  );
};

export default Header;
