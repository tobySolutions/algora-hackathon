import React from 'react'
import Logo from "./../../Assets/logo.svg"

function NavBar() {
  return (
    <header className="bg-[#1C1F2E] border-[2px] border-[#292A38]">
      <nav className="container">
        {/* I want the nav bar to be separated into three groups of two. There is space between all three */}
        <ul className="list justify-between items-center">
          <ul className="list items-center">
            <li className="nav-listItem">
              <img src={Logo} className="w-[4.25rem] height-[4.25rem]" alt="application logo" />
            </li>
            <li className="nav-listItem">
              <p className="logo-desc">Google Meet</p>
            </li>
          </ul>
          <ul className="list">
            <li className="nav-listItem">
              <h1>Progress on quarterly goals</h1>
            </li>
            <li className="nav-listItem">
              <p>7 members</p>
            </li>
          </ul>
          <ul className="list">
            <li className="nav-listItem">Bell</li>
            <li className="nav-listItem">Sidebar Toggler</li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar