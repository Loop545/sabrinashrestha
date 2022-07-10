import React from "react";

// Components
import Nav from "../components/Nav";

const FrontPage = () => {
  return (
    <div className='frontpage-container container h-screen mx-auto relative'>
      <Nav />
      <div className='frontpage-content h-full'>
        <div className='first columns-2 gap-0 h-1/3'>
          <div className='w-full h-full bg-red-300'>
            <p className='bg-red-300'>colour</p>
          </div>
          <div className='w-full h-full bg-stone-300'>
            <p>text</p>
          </div>
        </div>
        <div className='second columns-2 h-1/3'></div>
        <div className='third columns-2 h-1/3'></div>
      </div>
    </div>
  );
};
export default FrontPage;
