// import { request, gql } from 'graphql-request';

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (page = 1, limit = 3, searchQuery = '') => {
  const searchParams = new URLSearchParams({
    _page: page,
    _limit: limit,
    q: searchQuery
  });

  const url = `https://blog-518y.onrender.com/blogs?${searchParams.toString()}`;
  const response = await fetch(url);
  const posts = await response.json();

  return posts;
};

export const getPostDetails = async (id) => {
  const response = await fetch(`https://blog-518y.onrender.com/blogs/${id}`);
  const post = await response.json();

  return post;
};



export const submitComment = async (post, postId, comment) => {
    console.log(postId, comment)

  const response = await fetch(`https://blog-518y.onrender.com/blogs/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      comments: [...post.comments, comment]
    }),
  });

  const newComment = await response.json();

  return newComment;
};



