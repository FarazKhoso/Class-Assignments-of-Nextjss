import React from 'react'

const Nav = () => {
  return (

    <nav id="header" className='fixed top-0' >
        <input type="checkbox" id="check"/>

        <label  className="checkbtn" >
        <i className='bx bx-menu'></i>
    </label>
        <label className="logo">GIAIC</label>
        <ul className='mt-7'>
            <li><a href="#" className="active">home</a></li>
            
            <li><a href="#">about</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </nav>
  
  )
}

export default Nav
