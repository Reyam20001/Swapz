import { useEffect, useState } from 'react';
import FeedbackList from '../components/feedbacks/FeedbackList';

const FeedbacksPage = () => {
  const [feed, setFeedbacks] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAbortController = new AbortController();
    const fetchSignal = fetchAbortController.signal;

    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/evaluations/AllFeedback', {signal: fetchSignal});
        const data = await response.json();

        if (!response.ok) 
        {
          throw Error(data.error);
        }

        setFeedbacks(data.feed);

        setIsLoading(false);
      } 
      catch (err) 
      {
        console.log(err.message);
      }
    };

    fetchProducts();

    return () => 
    {
      fetchAbortController.abort();
    };
  }, []);

  if (isLoading) 
  {
    return <p>Please wait while we are loading data...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <FeedbackList feed={feed} />
    </div>
  );
};

export default FeedbacksPage;
