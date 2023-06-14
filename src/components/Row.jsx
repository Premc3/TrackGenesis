import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import './Row.css';
import { useNavigate } from 'react-router-dom';

const Row = ({ data, category }) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const capitalizedCategory = capitalizeFirstLetter(category);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  const navigate = useNavigate();

  const navigateToComponent = (d) => {
    navigate('/product', { state: { data: d } });
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="container">
      <h2 className="title">{capitalizedCategory}</h2>
      <div className="row_posters">
        {data.map((d) => (
          <Card
            key={d.id}
            sx={{ maxWidth: 345 }}
            className="row_poster"
            onClick={() => navigateToComponent(d)}
          >
            <CardMedia component="img" alt="green iguana" height="140" image={d.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'justify' }}>
                {truncate(d.title, 50)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className={`description ${hoveredItem === d.id ? 'hand-cursor' : ''}`}
                onMouseEnter={() => handleMouseEnter(d.id)}
                onMouseLeave={handleMouseLeave}
              >
                {truncate(d.description, 75)}
                {hoveredItem === d.id && (
                  <span className="read-more" onClick={() => navigateToComponent(d)}>
                    Read More
                  </span>
                )}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary" className="price">
                Rate: ${d.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="rating">
                Rating: {d.rating.rate}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Row;
