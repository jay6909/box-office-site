/* eslint-disable no-unused-vars */
import React from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../Styled';
import { useShows } from '../../misc/custom-hooks';

const ShowGrid = ({ data }) => {

  const[favShows, dispatchFav]=useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        
        const isFav=favShows.includes(show.id);
        
        const onStarClick=()=>{
          if(isFav){
            dispatchFav({type:'REMOVE', showId: show.id})
          }
          else{
            dispatchFav({type:'ADD', showId: show.id})
          }
        }

        return(
          <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          summary={show.summary}
          onStarClick={onStarClick}
          isFav={isFav}
        />
        )

      })}
      
    </FlexGrid>
  );
};

export default ShowGrid;
