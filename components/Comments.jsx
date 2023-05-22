import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

const Comments = ({ comments }) => {


  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg w-full rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length}
            {' '}
            Comments
          </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-100 mb-4 pb-4">
                  <div className="flex items-center mb-2">
                <img
                  alt={comment.name}
                  height="40px"
                  width="40px"
                  className="align-middle rounded-full"
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=360&t=st=1684577996~exp=1684578596~hmac=db352a352f632d4a54e2b2c9f7a8455bd0ef482a446b35f7e9e6132ed0d6dd21"
                />
                <div className="ml-2">
                  <p className="inline align-middle text-gray-700 font-medium text-lg">{comment.name}</p>
                  <p className="text-gray-500 text-sm">{comment.email}</p>
                </div>
              </div>
                <p className="whitespace-pre-line text-gray-600 w-full">{parse(comment.content)}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Comments;
