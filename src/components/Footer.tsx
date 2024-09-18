import Link from "next/link"


function Footer() {
    return (
      <footer className=" text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
            NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and mobile solutions tailored to your business. We’re committed to turning your digital ideas into reality with cutting-edge technology and expert services.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>123 Innovation Drive, Tech City, TC 45678</p>
            <p>Kolkata 10001</p>
            <p>Email:  info@naiyo24.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 <span>NAIYO24</span>. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer