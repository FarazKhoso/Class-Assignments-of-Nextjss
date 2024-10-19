import Link from 'next/link'
import React from 'react'

const Footer:React.FC = () => {
  return (

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-lg font-semibold">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
    
              {/* Column 2 */}
              <div>
                <h3 className="text-lg font-semibold">Support</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
    
              {/* Column 3 */}
              <div>
                <h3 className="text-lg font-semibold">Contact</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="hover:underline">
                      Email Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Support Chat
                    </a>
                  </li>
                </ul>
              </div>
    
              {/* Column 4 */}
              <div>
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="#" className="hover:underline">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Facebook
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
    
            <div className="mt-8 border-t border-gray-700 pt-6 text-center">
              <p className="text-sm">&copy; {new Date().getFullYear()} Muhammad Faraz. All rights reserved.</p>
            </div>
          </div>
        </footer>
  )
}

export default Footer
