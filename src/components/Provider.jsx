import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarwarsContext from '../context/StarwarsContext';

export default function Provider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanetsApi = () => {
      fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json())
        .then((planets) => setData(planets))
        .then(() => setLoading(false));
    };
    fetchPlanetsApi();
  }, []);

  return (
    <StarwarsContext.Provider value={ { data, loading } }>
      {children}
    </StarwarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};