import React from 'react';
import '../css/Table.css';

function HeaderTable() {
  return (
    <tr className="header-table-container">
      <th className="header-title">Name</th>
      <th className="header-title">Climate</th>
      <th className="header-title">Created</th>
      <th className="header-title">Diameter</th>
      <th className="header-title">Edited</th>
      <th className="header-title">Gravity</th>
      <th className="header-title">Orbital Period</th>
      <th className="header-title">Population</th>
      <th className="header-title">Rotation Period</th>
      <th className="header-title">Surface Water</th>
      <th className="header-title">Terrain</th>
    </tr>
  );
}

export default HeaderTable;
