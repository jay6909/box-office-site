import React from 'react'
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <StyledActorCard>
      <div className='img-wrapper'>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Nationality: ${country}` : 'No nationality data'}</p>
      {birthday ? <p>Born on: {birthday}</p> : null}
      <p className='deathday'>{deathday ? `Died: ${deathday}` : null}</p>
    </StyledActorCard>
  );
};

export default ActorCard