import { useState, useEffect } from 'react';

import AddResellableItemForm from '../components/ResellItems/AddResellableItemForm';

const AddResellableItemPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchAbortController = new AbortController();
  //   const fetchSignal = fetchAbortController.signal;

  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/resell/display', {
  //         signal: fetchSignal,
  //         method: 'POST'
  //       });
  //       const data = await response.json();

  //       if (!response.ok) {
  //         throw Error(data.error);
  //       }

  //       setItems(data.newResellItem);
  //       setIsLoading(false);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };

  //   fetchItems();

  //   return () => {
  //     fetchAbortController.abort();
  //   };
  // }, []);

  // if (isLoading) {
  //   return <p>Loading list of existing suppliers...</p>;
  // }

  return (
    <div>
      <AddResellableItemForm items={items} />
    </div>
  );
};

export default AddResellableItemPage;
