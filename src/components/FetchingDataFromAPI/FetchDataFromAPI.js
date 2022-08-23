import React, { useEffect, useState } from 'react';
import useFetchData from './useFetchData';

const FetchDataFromAPI = () => {
    // const data = useFetchData("https://jsonplaceholder.typicode.com/posts", "get");
    const { data: joke, loading, error, refetch } = useFetchData(
        "https://v2.jokeapi.dev/joke/Any"
      );
    
      if (loading) return <h1> LOADING...</h1>;
    
      if (error) console.log(error);
    
      return (
        <div className="App">
          <h1>
            {joke?.setup} : {joke?.delivery}
          </h1>
    
          <button onClick={refetch}> Refetch</button>
        </div>
      );
};

export default FetchDataFromAPI;