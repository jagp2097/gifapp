import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  console.log(category)

  // const [images, setImages] = useState([]);
  const { data:images, loading } = useFetchGifs(category);

  // // si la informacion del componente cambia, este hook se ejecutará
  // useEffect(() => {
  //   getGifs(category)
  //     .then(images => setImages(images));
  // }, [ category ]);

  return(
    <Fragment>
      <h3 className="animate__animated animate__fadeIn">{ category }</h3>

      { loading && <p>Cargando...</p> }

      <div className="card-grid">
        {
          images.map(image => 
            <GifGridItem 
              key={image.id}
              {...image}/>
            )
        }
      </div>
    </Fragment>
  );
};

export default GifGrid;
