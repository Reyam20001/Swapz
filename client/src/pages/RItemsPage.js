import { useEffect, useState } from 'react';
import RItemsList from '../components/ResellItems/RItemsList';

const RItemsPage = () => {
  // let's define a state for products
  const [items, setItems] = useState([]);

  // let's define a state for loading
  const [isLoading, setIsLoading] = useState(true);
  
  const onButtonClickHandler = async() =>
  {
    try{
      const response = await fetch('http://localhost:5000/resell');
      const data = await response.json();
      console.log(data);
      if(!response.ok)
      {
        throw Error(data.error);
      }
      setItems(data.items);
    }catch(err)
    {
      console.log(err.message);
    }
  }

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchItems = async () => {
      try {
        // send an HTTP GET request to the get products route we defined in our Express REST API
        const response = await fetch('http://localhost:5000/resell', {
          method: 'GET',
          signal: fetchSignal
        });
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          // remember, in our REST API we return an error message in our response that has the key 'error'.
          throw Error(data.error);
        }

        // we now need to set our component state to the products we fetched
        setItems(data.items);

        // after we set the products' state, let's set the loading state to false
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchItems();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <RItemsList items={items} />
    </div>
  );
};

export default RItemsPage;
