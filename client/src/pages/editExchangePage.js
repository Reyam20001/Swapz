import React from 'react'
import {useState} from 'react';
import EditExchangeForm from '../components/exchange/editExchangeForm';


const EditExchangePage = () => {
    const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    return(
        <div>
            <EditExchangeForm items ={items}/>
        </div>
    );
};

export default EditExchangePage;