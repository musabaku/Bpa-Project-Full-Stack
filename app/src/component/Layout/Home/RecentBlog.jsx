import React from 'react';
import "./RecentBlog.css";

const RecentBlog = () => {
  // The data array with blog information
  const data = [
    {
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
      title: 'Top Cities for Profitable Real Estate Investment in Turkey',
    },
    {
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
      title: 'Exploring Turkey’s Booming Real Estate Market',
    },
    {
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
      title: 'Impact of Changing Mortgage Interest Rates on Turkey’s Property Market',
    },
    {
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593',
      title: 'Notaries Take the Lead: A New Era in Real Estate Transactions',
    },
  
    // Add more data objects as needed
  ];

  return (
    <>
        <div className="blogHeading">
          <h3>Latest Posts on Our Blog</h3>
        </div>
        <div className="blogBox">
          <div className="blogContent">
            {data.map((blog, index) => (
              <span className="blogContent-inside" key={index}>
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <h4>{blog.title}</h4>
              </span>
            ))}
          </div>
        </div>

        <div className="blogButton">
          <button>View All</button>
        </div>
    </>
  );
};

export default RecentBlog;
