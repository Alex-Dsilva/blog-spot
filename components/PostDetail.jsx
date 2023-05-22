import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {


  const contentArray = post.content.split('\n\n');

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img src={post.image} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 ">
              <img
                alt={post.author}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=360&t=st=1684577996~exp=1684578596~hmac=db352a352f632d4a54e2b2c9f7a8455bd0ef482a446b35f7e9e6132ed0d6dd21"}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          <div>
    {contentArray.map((item, index) => {
      if (item.startsWith('#')) {
        const headingLevel = item.match(/^#+/)[0].length; // Determine the heading level based on the number of '#' symbols
        const headingContent = item.replace(/^#+/, '').trim(); // Remove the '#' symbols and trim any leading/trailing spaces
        const HeadingTag = `h${headingLevel}`;

        return (
          <HeadingTag key={index}>{headingContent}</HeadingTag>
        );
      } else {
        return (
          <p key={index} className='tracking-widest text-lg font-medium' >{item}</p>
        );
      }
    })}
  </div>
        </div>
      </div>

    </>
  );
};

export default PostDetail;
