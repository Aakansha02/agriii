import React from 'react';
import './Services.css';
import Home from '../ages/Home';

const BlogCard = ({ title, image, date, description }) => {
  return (
    <a href={Home} className="blog-card">
      <img src={image} alt={title} className="blog-card__image" />
      <div className="blog-card__content">
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__date">{date}</p>
        <p className="blog-card__description">{description}</p>
      </div>
    </a>
  );
};

export default BlogCard;
