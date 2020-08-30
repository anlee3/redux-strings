/**
 *
 * StringInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function StringInput({ value, onInputChange, onSubmit, buttonText }) {
  return (
    <div>
      <input value={value} onChange={onInputChange} />
      <button type="button" onClick={onSubmit}>
        {buttonText}
      </button>
    </div>
  );
}

StringInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default StringInput;