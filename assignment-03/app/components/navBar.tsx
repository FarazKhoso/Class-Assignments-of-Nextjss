import React from 'react'
import Link from 'next/link'

const NavBar: React.FC  = () => {
  return (

        <header className="fixed top-0 left-0 w-full p-8 bg-gray-800 flex justify-between items-center z-50">
        
            <Link href={'#'} className="text-2xl font-semibold text-gray-300">GIAIC</Link>
          
          <nav className="flex">
            
              <Link href="#" className="text-lg font-medium text-gray-300 ml-9 transition-colors duration-300 hover:text-cyan-500 active:text-cyan-500">
                Home
              </Link>
      
            
              <Link href="#about" className="text-lg font-medium text-gray-300 ml-9 transition-colors duration-300 hover:text-cyan-500">
                About
              </Link>
       
         
              <Link href="#project" className="text-lg font-medium text-gray-300 ml-9 transition-colors duration-300 hover:text-cyan-500">
                Project
              </Link>
           
          </nav>
        </header>
      );
    };
    
    
    

export default NavBar
