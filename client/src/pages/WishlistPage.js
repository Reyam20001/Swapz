import { useEffect, useState } from 'react';
import WishlistList from '../components/wishlist/WishlistList';

const WishlistPage = () => {
  const [prods, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/users/getWishlists/6391de4b0ca20cf8333bd782', {
        method: 'GET'  ,
        signal: fetchSignal
        });
        const data = await response.json();

        if (!response.ok) {
          throw Error(data.error);
        }

        setProducts(data.prods);

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
      <WishlistList prods={prods} />
    </div>
  );
};

export default WishlistPage;
