import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Row from '../components/Row';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Home = () => {
  const [store, setStore] = useState([]);
  console.table(store);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setStore(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Categorize rows based on category
  const categorizeRows = (category) => {
    return store.filter((item) => item.category === category);
  };

  return (
    <div>
      <Navbar buttonValue="" />
      <Banner data={store} />
      {['electronics', 'jewelery', "men's clothing", "women's clothing"].map((category) => (
        <Row key={category} category={category} data={categorizeRows(category)} />
      ))}
    </div>
  );
};

export default Home;
