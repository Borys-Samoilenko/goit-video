import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default-image.jpg';
import './Painting.css';

const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (
  <div className="Painting">
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Author: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Price: {price} credits</p>
    <p>Availability: {quantity < 10 ? 'Out of stock' : 'Available'}</p>
    <button type="button">Add to cart</button>
  </div>
);

Painting.defaultProps = {
  url: defaultImage,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
