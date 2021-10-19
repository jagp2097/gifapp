import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Fragment } from 'react/cjs/react.production.min';

const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2)
    {
      // la pura funcion del hook trae una referencia al estado anterior del componente
      // se utiliza de la siguiente manera
      setCategories( categories => [ inputValue, ...categories ] ); 
      setInputValue('');
    }

  };

  return(
    //<Fragment> // podemos prescindir del fragment porque el form actua como el fragment
      <form onSubmit={ event => handleOnSubmit(event) }>
        <input 
          type="text" 
          value={ inputValue } 
          onChange={ handleOnChange } />
      </form>

    /// </Fragment> 
  );

};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;

