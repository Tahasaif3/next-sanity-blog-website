import Link from "next/link";

export default function AlertBanner() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/95 text-black border-b backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
       
        <div className="text-lg font-bold">
          <a href="/">MyBlog</a>
        </div>

        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-black hover:text-teal-500 transition-colors duration-200"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-black hover:text-teal-500 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black hover:text-teal-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            className="p-2 text-black hover:text-teal-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
\            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
