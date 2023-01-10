/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';

const Starred = () => {
  const [fav] = useShows();

  const [shows, setShows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fav && fav.length > 0) {
      const promises = fav.map(showId => apiGet(`/shows/${showId}`));

      Promise.all(promises)
      .then(apiData=>apiData.map(show=>({show})))
        .then(results => {
          setShows(results);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [fav]);

  return (
    <MainPageLayout>
      {isLoading && <div>wait a moment...loading...</div>}
      {error && <div>Error happened while loading: {error}</div>}
      {!isLoading &&!shows &&<div> You currently do not have favorites added, add some to see here</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows}/>}

    </MainPageLayout>
  );
};

export default Starred;
