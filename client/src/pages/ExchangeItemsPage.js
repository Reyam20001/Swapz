import React from 'react'
import { useEffect, useState } from 'react';
import ExchangeList from '../components/exchange/ExchangeList';

const ExchangeItemsPage = () => {
  const [items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

 useEffect(() =>{
  const fetchAbortController = new AbortController();
  const fetchSignal = fetchAbortController.signal;
  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/exchange',{
        method:'GET',
        signal: fetchSignal
      });
      const data = await response.json();

      if (!response.ok){
        throw Error(data.error);
      }
      setItems(data.items);
      setIsLoading(false);
    }
    catch(err){
      console.log(err.message);
    }
  };
  fetchItems();

return()=>{
  fetchAbortController.abort();
 };

}, []);
if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }

return (
    <div className="flex flex-col items-center justify-center">
      <ExchangeList items={items} />
    </div>
  );
};

export default ExchangeItemsPage;
