import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import './BlogCard.css';

const BlogCard = ({ data }) => {
  return (
    <div className="blogCard">
      <div className="blogHeading">
        <h3>Latest Posts on Our Blog</h3>
      </div>
      <div className="blogContainer">
        {data.map((blog, index) => (
          <div className="blogContent" key={index}>
            <img src={blog.image} alt={blog.title} className="blogImage" />
            <h4>{blog.title}</h4>
          </div>
        ))}
      </div>

      <div className="blogButton">
        <button>
          View All <RiArrowRightSLine />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
