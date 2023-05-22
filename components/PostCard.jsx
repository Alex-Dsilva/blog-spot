import React from 'react';
import Link from 'next/link';


const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
    <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.image} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
    <h1 className="transition duration-700 text-center mb-3 p-2 cursor-pointer hover:text-pink-600 text-2xl font-semibold">
      <Link href={`/post/${post.id}`}>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-4 w-full">
      <div className="flex items-center justify-center mb-2 lg:mb-0 w-full lg:w-auto mr-8 ">
      <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=360&t=st=1684577996~exp=1684578596~hmac=db352a352f632d4a54e2b2c9f7a8455bd0ef482a446b35f7e9e6132ed0d6dd21"
            alt=""
            width={30}
            height={30}
            className="rounded-full"
          />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author}</p>
      </div>
    </div>
      <p className="text-center truncate-4-lines text-md text-gray-700 font-normal px-4 lg:px-2 mb-6 ">
        {post.summary}
      </p>
    <div className="text-center">
      <Link href={`/blog/${post.id}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;
