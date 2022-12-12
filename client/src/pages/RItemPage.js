import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// const RItemsSummary = (props) => {
// };
// delete button w counterOffer
const RItemPage = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const params = useParams();

  const itemID = params.itemID;

  const item_ID = params.itemID;
  const btnOnClickHandler = () => {
    navigate(`/resell/negotiate/${item_ID}`);
  };


  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchItemDetails = async () => {
      try {
        
        const response = await fetch(
          `http://localhost:5000/resell/oneTime/${itemID}`,
          {
            method: 'GET',
            signal: fetchSignal
          }
        );
       
        const data = await response.json();

        if (!response.ok) {
         
          throw Error(data.error);
        }

      
        setItem(data.item);

        
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchItemDetails();

    return () => {
      fetchAbortController.abort();
    };
  }, [itemID]);

  if (isLoading) {
    return <h1>Please wait while loading product details...</h1>;
  }

  // if (!product) {
  //   return <h1>Couldn't find product...</h1>;
  // }

  return (
    <div className="flex justify-center items-center w-screen gap-8 flex-wrap">
      <div className="flex flex-col justify-center items-center gap-10 bg-sky-800 text-white py-16 min-w-[500px] rounded-3xl">
        <h1 className="font-bold text-4xl">{item.title}</h1>
        <img
          src={item.imgURL}
          alt={item.title}
          className="object-scale-down h-[300px] bg-white p-10 rounded-3xl"
        />
        <p className="text-lg">{item.description}</p>
        <h3 className="text-lg font-bold">{item.price} EGP</h3>
        <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
        Add Offer
        </button>
        <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
         Purchase Item
        </button>
      </div>
      </div>
  );
};

export default RItemPage;
