import { Button, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Product.css';
import Navbar from '../components/Navbar';

const ProductPage = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div>
      <Navbar buttonValue="Home" />
      <div className="page-container">
        <div className="product-page-container">
          <h1 className="product-title">{data.title}</h1>
          <div className="product-content">
            <div className="product-image-container">
              <img src={data.image} alt="Product Image" className="product-image" />
            </div>
            <div className="product-description">
              <div className="buy-now-container">
              <Typography variant="body1">{data.description}</Typography>
              <Typography variant="body2" className="product-price">
                Price: ${data.price}
              </Typography>
              <Typography variant="body2" className="product-rating">
                Rating: {data.rating.rate}
              </Typography>
              <div >
                <Button variant="contained" color="primary" className="buy-now-button">
                  Buy Now
                </Button>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
