"use client"
import { useState } from 'react';
import { PostCard } from '../components';
import { getPosts } from '../services';

export default function Home({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts|| []);
  const [currentPage, setCurrentPage] = useState(1);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      setShowValidationMessage(true);
    } else {
      setShowValidationMessage(false);
      try {
        const searchedPosts = await getPosts(1, 3,searchQuery);
        console.log(searchedPosts)
        setPosts(searchedPosts);
      } catch (error) {
        console.error('Error while searching:', error);
      }
    }
  };

  const loadPosts = async (page) => {
    const newPosts = await getPosts(page);
    setPosts(newPosts);
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    loadPosts(nextPage);
  };

  const goToPreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 1) {
      loadPosts(previousPage);
    }
  };

  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      if (searchQuery.trim() === '') {
        setShowValidationMessage(true);
      } else {
        setShowValidationMessage(false);
        try {
          const searchedPosts = await getPosts(1, 3,searchQuery);
          console.log(searchedPosts)
          setPosts(searchedPosts);
        } catch (error) {
          console.error('Error while searching:', error);
        }
      }
    }
  };


  return (
    <div>
     <div className="hero-section relative h-fit">
      <div className="parallax-bg absolute inset-0 bg-cover bg-center"></div>
      <div className="content flex flex-col items-center justify-center text-white">
        <h1 className=" text-3xl  md:text-4xl  font-bold mb-4">Welcome to Blos-Spot</h1>
        <p className="text-xl mb-6">Find the Blog you're looking for</p>
      </div>
    </div>
      <div className="flex justify-center mb-8 ">
      <div  className="flex">
        <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={()=> setShowValidationMessage(true)}
        onBlur={()=> setShowValidationMessage(false)}
        placeholder="Search by keyword"
        onKeyPress={handleKeyPress}
        className="border border-gray-300 rounded-l-lg px-6 py-2 md:w-64 focus:outline-none"
      />
       <button onClick={handleSearchSubmit} className="bg-blue-500 text-white rounded-r-lg px-6 py-2 ml-2">
            Search
          </button>
        </div>
       

        </div>
      {posts.length?(
        <div className="mx-auto px-10 mb-8">
      
        <div className="grid grid-cols-1  xl:justify-center lg:grid-cols-3 md:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div style={{ width: 'fit-content', alignItems:'center'}} className="pagination flex m-auto justify-center bg-white rounded-full">
            <button
              onClick={goToPreviousPage}
              style={{ height: 'fit-content' }}
              className={` inline-block text-lg font-medium p-2 w-32 rounded-l-full ${
                currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div style={{ width:"fit-content" }} className="flex justify-center align-middle text-center px-5">{currentPage}</div>
            <button
              onClick={goToNextPage}
              style={{ height: 'fit-content' }}
              className={` inline-block text-lg font-medium w-32 p-2 rounded-r-full ${
              currentPage === 2 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'
              }`}
              disabled={currentPage === 2}
            >
              Next
            </button>
        </div>
      </div>
      ):(
          <div className='flex flex-col m-auto'>
            <p className=' text-center font-bold xl:text-4xl text-md lg:text-md mb-8 '>No Blogs related to {searchQuery} yet</p>
            <img style={{width:"40%", margin:'auto'}} src="https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=740&t=st=1684612694~exp=1684613294~hmac=e66e80ae0ebe1aca8a8a6f051a78bb20c020000a92eeb12a996effaa074c7bae" alt="No Blogs"/>
          </div>
      )
        
      }
    
    </div>
  );
}

export async function getStaticProps() {
  const initialPosts = await getPosts(1);
  
  return {
    props: {
      initialPosts,
    },
  };
}
