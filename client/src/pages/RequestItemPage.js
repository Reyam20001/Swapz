import { useEffect, useState } from 'react';
import RequestList from '../components/requests/RequestList';

const RequestItemPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/request/requestProduct', {
        method: 'GET'  ,
        signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setProducts(data.products);

        setIsLoading(false);

      } catch (err) {
        console.log(err.message);
      }
    };

    fetchProducts();

    return () => {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) {
    return <p>Please wait while we are loading data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <RequestList products={products} />
    </div>
  );
};

export default RequestItemPage;
