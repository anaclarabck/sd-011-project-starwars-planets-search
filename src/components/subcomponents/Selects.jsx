import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import comparisonFilter from '../../helpers/comparisonFilter';
import columnFilter from '../../helpers/columnFilter';
import Context from '../../context/Context';

function Selects(props) {
  const { selects, setSelects } = props;
  const { filters } = useContext(Context);
  const { filterByNumericValues } = filters;

  const columnOptions = columnFilter
    .filter((column) => !filterByNumericValues
      .map((filter) => filter.column)
      .includes(column));

  useEffect(() => {
    setSelects({ ...selects,
      column: columnOptions[0],
      comparison: comparisonFilter[0],
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeColumn = ({ target }) => {
    setSelects({ ...selects, column: target.value });
  };

  const changeComparison = ({ target }) => {
    setSelects({ ...selects, comparison: target.value });
  };

  const changeValue = ({ target }) => {
    setSelects({ ...selects, value: target.value });
  };

  return (
    <>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => changeColumn({ target }) }
        /* onClick={ ({ target }) => changeColumn({ target }) } */
        /* defaultValue={ columnOptions[0] } */
        /* value={ columnS } */
      >
        {columnOptions.map((option) => (<option key={ option }>{ option }</option>))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => changeComparison({ target }) }
        defaultValue={ comparisonFilter[0] }
      >
        {comparisonFilter.map((compair) => (<option key={ compair }>{compair}</option>))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ ({ target }) => changeValue({ target }) }
      />
    </>
  );
}

Selects.propTypes = {
  selects: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  setSelects: PropTypes.func.isRequired,
};

export default Selects;
