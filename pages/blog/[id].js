// "use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { PostDetail, Comments, CommentsForm, Loader } from '../../components';
import { getPosts, getPostDetails, submitComment } from '../../services';

const PostDetails = ({ post }) => {
  const [comments, setComments] = useState(post.comments);
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  console.log("dy", post)

  const handleSubmitComment = async ( commentObj) => {
    console.log(commentObj, "check")
    try {
      const updatedPost = await submitComment(post, post.id, {id:post.comments.length+1, ...commentObj});
      setComments(updatedPost.comments);
    } catch (error) {
      alert("Error While Submitting Comment"+error)
    }
  };

  return (
    <>
      <div className=" mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <div className='lg:flex lg:gap-2' >
              <CommentsForm handleSubmitComment={handleSubmitComment} />
              <Comments comments={comments} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.id);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: true, 
  };
}