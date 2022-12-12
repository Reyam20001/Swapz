import React from 'react'
import {useState} from 'react';
import AddOfferForm from '../components/exchange/addOfferForm';


const MakeOfferPage = () => {
    const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    return(
        <div>
            <AddOfferForm items ={items}/>
        </div>
    );
};

export default MakeOfferPage;