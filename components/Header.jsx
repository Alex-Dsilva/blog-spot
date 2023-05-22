import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getPosts } from '../services';

const Header = () => {
  

  return (
    <div className=" mx-auto mb-8">
      <div className="border-b w-full px-10 inline-block bg-gray-100 py-5">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-blue-500 ">Blog-Spot</span>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
