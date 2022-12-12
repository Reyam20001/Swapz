import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ExchangeItemPage = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // use the useParams hook in React Router to allow us to access dynamic segments in our dynamic route
  const params = useParams();
  // our dynamic segment was called productId, so we can access it as follows:
  const itemID = params.itemID;

  // now simply use useEffect to fetch the product's data

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchItem = async () => {
      try {
        // send an HTTP GET request to the get products route we defined in our Express REST API
        const response = await fetch(
          `http://localhost:5000/exchange/item/${itemID}`,
          {
            method: 'GET',
            signal: fetchSignal
          }
        );
        // parse the response content to JSON and store it into data variable
        const data = await response.json();

        // If there is an HTTP error (the response is NOT ok), throw the error message we get from the REST API.
        if (!response.ok) {
          // remember, in our REST API we return an error message in our response that has the key 'error'.
          throw Error(data.error);
        }

        // we now need to set our component state to the products we fetched
        setItem(data.item);

        // after we set the products' state, let's set the loading state to false
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchItem();

    return () => {
      fetchAbortController.abort();
    };
  }, [itemID]);

  if (isLoading) {
    return <h1>Please wait while loading product details...</h1>;
  }
  const btnClickDelete = () => {
    navigate(`/exchange/delete/${item._id}`);
};

const btnClickOffer = () =>{
    navigate(`exchange/makeOffer/${item._id}`);
};

  return (
    <div className="flex justify-center items-center w-screen gap-8 flex-wrap">
      <div className="flex flex-col justify-center items-center gap-10 bg-sky-800 text-white py-16 min-w-[500px] rounded-3xl">
        <h1 className="font-bold text-4xl">{item.title}</h1>
        <img
          src={item.image}
          alt={item.title}
          className="object-scale-down h-[300px] bg-white p-10 rounded-3xl"
        />
        <p className="text-lg">{item.description}</p>
      </div>
      <button className = "bg-white py-3 px-10 font-bold rounded-xl"
                    onClick = {btnClickDelete}>
                        Delete
                    </button>
                    <button className = "bg-white py-3 px-10 font-bold rounded-xl"
                    onClick = {btnClickOffer}>
                       MakeOffer
                    </button>
    </div>
  );
};

export default ExchangeItemPage;
