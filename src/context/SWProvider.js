import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SWContext from './SWContext';
import getPlanets from '../services/API';

const options = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SWProvider({ children }) {
  const [data, setData] = useState([]);

  const [filterPlanets, setFilterPlanets] = useState(data);

  const [optionFilter, setOpitionfilters] = useState(options);

  const [filterByNumbers, setFilterByNumbers] = useState({
    column: optionFilter[0],
    comparsion: 'maior que',
    value: 0,
  });

  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const applyFilter = () => {
    const result = data.filter((val) => (
      val.name.includes(filters.filterByName.name)));
    setFilterPlanets(result);
  };

  function handleButtonClick() {
    setFilters((state) => (
      { ...state,
        filterByNumericValues: [...state.filterByNumericValues, filterByNumbers],
      }));
    setOpitionfilters((state) => state
      .filter((item) => item !== filterByNumbers.column));
  }

  useEffect(() => {
    setFilterByNumbers({
      column: optionFilter[0],
      comparsion: 'maior que',
      value: 0,
    });
  }, [optionFilter]);

  useEffect(() => {
    const dataPlanets = async () => {
      const listPlanets = await getPlanets();
      setData(listPlanets);
      setFilterPlanets(listPlanets);
    };
    dataPlanets();
  }, []);

  const context = {
    filters,
    filterPlanets,
    applyFilter,
    setFilters,
    optionFilter,
    filterByNumbers,
    setFilterByNumbers,
    handleButtonClick,
  };

  return (
    <div>
      <SWContext.Provider value={ context }>
        {children}
      </SWContext.Provider>
    </div>
  );
}

SWProvider.propTypes = {
  children: PropTypes.elements,
}.isRequired;

export default SWProvider;
