import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import FeedbackList from '../components/feedbacks/FeedbackList';

const FeedbackPage = () =>
{
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
const params = useParams();
const FeedbackID = params.FeedbackID;

    useEffect(() => 
    {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;

        const fetchFeedbacks = async () =>
        {
            try
            {
                const response = await fetch('http://localhost:5000/evaluations/AllFeedback', {signal: fetchSignal});
                const data = await response.json();

                if(!response.ok)
                {
                    throw Error(data.error);
                }

                setFeedbacks(data.feed);
                setIsLoading(false);

            }
            catch(err)
            {
                console.log('in');
                // console.log(err.message);
            }

            // setFeedbacks(dummyFeedback);
        };

        fetchFeedbacks();

        return () =>
        {
            fetchAbortController.abort();
        }

    }, [FeedbackID]);

    if(isLoading)
    {
        return <p>Please wait while the feedback is loading...</p>
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <FeedbackList feedbacks = {feedbacks}/>
        </div>
    ); 
};

export default FeedbackPage;



