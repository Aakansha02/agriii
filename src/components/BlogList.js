import React from 'react';
import BlogCard from './BlogCard.jsx';
import './Services.css';

const BlogList = () => {
  // Sample blog data (replace with your actual data)
  const blogs = [
    {
      title: 'Tips for Efficient Farming',
      image: '/images/farming-tips.jpg',
      date: 'May 10, 2023',
      description: 'Learn some helpful tips to improve your farming productivity.',
    },
    {
      title: 'Choosing the Right Farming Tools',
      image: '/images/farming-tools.jpg',
      date: 'April 25, 2023',
      description: 'Discover the essential tools you need for successful farming.',
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          image={blog.image}
          date={blog.date}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default BlogList;
