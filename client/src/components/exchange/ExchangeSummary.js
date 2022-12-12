import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../UI/card/Card';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';
import CardActions from '../../UI/card/CardActions';

const ExchangeSummary = (props) => {
    const navigate = useNavigate();

    const btnOnClickHandler = () => {
      navigate(`/exchange/item/${props.exchange._id}`);
    };

/*      const btnClickDelete = () => {
        navigate(`/exchange/delete/${props.exchange._id}`);
    };

    const btnClickOffer = () =>{
        navigate(`exchange/makeOffer/${props.exchange._id}`);
    }; */
    
    return (
        <Card>
            <CardHeader>
                <img className = "object-scale-down w-[400px]" 
                        src= {props.items.image}
                        alt={props.items.title}/>
            </CardHeader>
                <CardBody>
                    <h3 className = "font-bold">
                        {props.items.title}</h3>
                    <h5>{props.items.description}</h5>
                    <h5>{props.items.city}</h5>
                </CardBody>
                <CardActions>
                    <button className = "bg-white py-3 px-10 font-bold rounded-xl"
                    onClick = {btnOnClickHandler}>
                        View
                    </button>
                </CardActions>
        </Card>
    );

};
export default ExchangeSummary;