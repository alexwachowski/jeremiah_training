export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Left Section */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-200">MyWebsite</h2>
              <p className="mt-2 text-sm">
                © {new Date().getFullYear()} MyWebsite. All rights reserved.
              </p>
            </div>
  
            {/* Center Section - Links */}
            
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#home"
                className="hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            
            {/* Right Section - Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.16 4.16 0 001.85-2.3 8.38 8.38 0 01-2.64 1A4.18 4.18 0 0016.5 4c-2.26 0-4.1 1.84-4.1 4.1 0 .32.03.64.1.94A11.8 11.8 0 013 5.64a4.09 4.09 0 00-.56 2.06c0 1.43.73 2.7 1.84 3.44a4.14 4.14 0 01-1.86-.51v.05c0 2 1.43 3.66 3.33 4.04a4.12 4.12 0 01-1.85.07c.52 1.62 2.04 2.79 3.84 2.82a8.38 8.38 0 01-5.17 1.8c-.34 0-.67-.02-1-.05a11.82 11.82 0 006.39 1.88c7.67 0 11.86-6.36 11.86-11.86v-.54a8.46 8.46 0 002.07-2.15z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.2 2 3 1.5 3.8 1.1.1-.8.5-1.5.9-1.9-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.9 11.9 0 016.3 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.9.1 3.2.7.9 1.2 2 1.2 3.3 0 4.7-2.9 5.8-5.6 6.1.5.4.9 1.1.9 2.3v3.4c0 .4.2.7.8.6A12 12 0 0012 .3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  