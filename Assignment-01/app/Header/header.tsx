import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-green-300 w-full">
      <h1 className="text-center font-serif">I Have 3 pages you can visit them</h1>
      <ul className="font-bold">
        <li>
          <Link href={"About"}> About</Link>
        </li>
        <li>
          <Link href={"Service/projects"}>Projects</Link>
        </li>
        <li>
          <Link href={"Contact/my-contact "}> Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
