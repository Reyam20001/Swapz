import React from 'react'
import {useState, useEffect} from 'react';
import AddFeedbackForm from '../components/feedbacks/AddFeedbackForm';

const AddFeedbackPage = () =>
{
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    return(
        <div>
            <AddFeedbackForm feedbacks = {feedbacks}/>
        </div>
    );
};

export default AddFeedbackPage;