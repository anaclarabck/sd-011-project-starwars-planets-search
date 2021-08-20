import React from 'react';
import PropTypes from 'prop-types';
import '../css/Table.css';

function TableElements({ planet }) {
  return (
    <tr key={ planet.name } className="row-table">
      <td data-testid="planet-name" className="table-content">{planet.name}</td>
      <td className="table-content">{planet.climate}</td>
      <td className="table-content">{planet.created}</td>
      <td className="table-content">{planet.diameter}</td>
      <td className="table-content">{planet.edited}</td>
      <td className="table-content">{planet.gravity}</td>
      <td className="table-content">{planet.orbital_period}</td>
      <td className="table-content">{planet.population}</td>
      <td className="table-content">{planet.rotation_period}</td>
      <td className="table-content">{planet.surface_water}</td>
      <td className="table-content">{planet.terrain}</td>
    </tr>
  );
}

TableElements.propTypes = {
  planet: PropTypes.arrayOf(PropTypes.object),
}.isRequire;

export default TableElements;
