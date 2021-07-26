import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  // const [results, setResults] = useState();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAPI = async () => {
      const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(endPoint).then((data1) => data1.json());
      results.filter((result) => result !== 'residents');
      setData(results);
    };
    getAPI();
  }, []);
  return (
    <MyContext.Provider value={ { data } }>
      { children }
    </MyContext.Provider>
  );
}
export default MyProvider;

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};