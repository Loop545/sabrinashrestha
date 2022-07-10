import React from "react";

// Components
import Nav from "../components/Nav";

// assets
import Wave from "../assest/img/wave.svg";

const FrontPage = () => {
  return (
    <div className='frontpage-container h-screen mx-auto relative'>
      <Nav />
      <div className='waves fixed top-0 z-2 w-full'>
        <img className='w-full' src={Wave} alt='waves'></img>
      </div>
      <div className='frontpage-content h-full'>
        <div className='first columns-2 gap-0 pt-4 h-screen text-center'>
          <div className='w-full h-full p-8 bg-purple-1'>
            <p className=''></p>
          </div>
          <div className='w-full h-full p-8 bg-purple-2'>
            <p></p>
          </div>
        </div>
        <div className='second columns-2 gap-0 h-screen text-center'>
          <div className='w-full h-full p-8 bg-green-1'>
            <p className='bg-red-300'></p>
          </div>
          <div className='w-full h-full p-8 bg-green-2'>
            <p></p>
          </div>
        </div>
        <div className='third columns-2 gap-0 h-screen text-center'>
          <div className='w-full h-full p-8 bg-white-1'>
            <p className='bg-red-300'></p>
          </div>
          <div className='w-full h-full p-8 bg-white-2'>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FrontPage;
