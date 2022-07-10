import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='container p-4  h-16 font-projekt uppercase font-bold absolute top-0'>
      <div className='logo-container float-left'>
        <p>Sabrina</p>
      </div>
      <div className='navigation-links float-right'>
        <ul className='flex flex-row justify-between space-x-5'>
          <li className='px-2 basis-1/3'>
            <Link to={"/work"}>Work</Link>
          </li>
          <li className='px-2 basis-1/3'>
            <Link to={"/about"}>About</Link>
          </li>
          <li className='px-2 basis-1/3'>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
