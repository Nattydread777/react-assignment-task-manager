import React, { useState } from "react";
import usePosts from "../api/usePosts";
import useDebounce from "../hooks/useDebounce";
import Card from "../components/Card";
import Button from "../components/Button";

const ApiDataPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Use a debounced search term for better performance
  const debouncedSearch = useDebounce(search, 500);

  const {
    data: posts,
    loading,
    error,
    totalPages,
    deletePost, // <-- Get the delete function from the hook
  } = usePosts(debouncedSearch, page);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
        📚 Public API Posts
      </h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search posts by title or body..."
        value={search}
        onChange={handleSearchChange}
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 transition-shadow duration-300"
      />

      {/* Loading State */}
      {loading && (
        <div className="text-center py-10">
          <p className="text-blue-500 text-xl animate-pulse">
            Loading posts...
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <Card className="p-6 border-l-4 border-red-500">
          <p className="text-red-500 font-bold">Error: {error}</p>
          <p className="text-gray-600 dark:text-gray-300">
            Could not fetch data. Please try again later.
          </p>
        </Card>
      )}

      {/* Data Display Grid */}
      {!loading && !error && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="p-5 flex flex-col justify-between transition-transform transform hover:scale-[1.02]"
            >
              <div>
                <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">
                  {post.body.substring(0, 100)}...
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  User ID: {post.userId}
                </span>
                {/* Add the delete button here */}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <Card className="p-6 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            No posts found matching your search criteria.
          </p>
        </Card>
      )}

      {/* Pagination Controls */}
      {!loading && !error && totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 pt-4">
          <Button
            variant="secondary"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="text-lg font-medium">
            Page **{page}** of **{totalPages}**
          </span>
          <Button
            variant="secondary"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApiDataPage;
