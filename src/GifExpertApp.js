import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  // const categories = ['One Punch', 'Ratma 1/2', 'Dragon Ball', 'Captain Tsubasa'];
  // const [ categories, setCategories ] = useState(['Captain Comando']);
  const [ categories, setCategories ] = useState(defaultCategories);

  // const handleAdd = () => {
  //   setCategories([...categories, 'oso']);
  // };

  return(
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory 
        setCategories={ setCategories } />
      <hr />

      <ol>
        { 
          categories.map( category => ( 
            <GifGrid 
              key={ category }
              category={ category } /> 
          ))
        }
      </ol>

    </Fragment>

  );

};


export default GifExpertApp;
