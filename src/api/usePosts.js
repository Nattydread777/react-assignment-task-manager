import { useState, useEffect } from 'react';
import axios from 'axios'; // You would need to install axios: npm install axios

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const PAGE_SIZE = 10;

const usePosts = (searchQuery = '', page = 1) => {
  const [allPosts, setAllPosts] = useState([]); // Store all posts for filtering
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);
    
    // Simulate pagination/search on the client side since JSONPlaceholder
    // doesn't support complex server-side filtering and pagination out of the box.
    // In a real app, you'd adjust the API URL here: 
    // const url = `${BASE_URL}?_limit=${PAGE_SIZE}&_page=${page}&q=${searchQuery}`;

    const fetchPosts = async () => {
      try {
        // Fetch all data for client-side filtering/pagination simulation
        const response = await axios.get(BASE_URL); 
        if (isMounted) setAllPosts(response.data);
        
        // 1. Apply search filter
        const filteredPosts = allPosts.filter(post => 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          post.body.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // 2. Apply pagination
        const newTotalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);
        const startIndex = (page - 1) * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

        if (isMounted) {
          setData(paginatedPosts);
          setTotalPages(newTotalPages);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch data from API.');
          setLoading(false);
        }
      }
    };

    fetchPosts();

    return () => {
      isMounted = false; // Cleanup for unmounted component
    };
  }, [searchQuery, page]);

  // Function to delete a post from the state
  const deletePost = async (postId) => {
    try {
      // Simulate API call
      await axios.delete(`${BASE_URL}/${postId}`);
      
      // Optimistically update the UI by removing the post from the local state
      setData(prevData => prevData.filter(post => post.id !== postId));
      setAllPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    } catch (err) {
      console.error("Failed to delete post:", err);
      // Optionally set an error state to show in the UI
    }
  };

  return { data, loading, error, totalPages, deletePost };
};

export default usePosts;