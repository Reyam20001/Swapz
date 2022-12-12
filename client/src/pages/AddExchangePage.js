import React from 'react'
import {useState} from 'react';
import AddExchangeForm from '../components/exchange/AddExchangeForm';


const AddExchangePage = () => {
    const [exchanges, setExchanges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    return(
        <div>
            <AddExchangeForm exchanges ={exchanges}/>
        </div>
    );
};

export default AddExchangePage;