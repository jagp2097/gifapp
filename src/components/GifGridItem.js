import React from 'react';
// import { Fragment } from 'react/cjs/react.production.min';
// import '../index.css'

const GifGridItem = ({ title, url }) => {
  
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  );

};


export default GifGridItem;
