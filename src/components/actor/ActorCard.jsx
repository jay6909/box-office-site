import React from 'react'

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Nationality: ${country}` : 'No nationality data'}</p>
      {birthday ? <p>Born on: {birthday}</p> : null}
      <p>{deathday ? `Died: ${deathday}` : null}</p>
    </div>
  );
};

export default ActorCard