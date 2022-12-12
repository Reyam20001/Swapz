import React from 'react';
import {useNavigate} from 'react-router-dom';
import Card from "../../UI/card/Card";
import CardHeader from "../../UI/card/CardHeader";
import CardBody from "../../UI/card/CardBody";
import CardActions from "../../UI/card/CardActions";

const FeedbackSummary = (props) =>
{
    const navigate = useNavigate();

    const btnOnClickHandler = () => 
    {
        navigate(`/evaluations/${props.feedback._id}`);
    };

    return(
        <Card>
            <CardBody>
                <h3 className="font-bold">{props.feed.userId}</h3>
                <h5>{props.feed.feedback}</h5>
                <h4>Rating: {props.feed.rating}</h4>
            </CardBody>
            {}
            <CardActions>
                <button className="bg-white py-3 px-10 font-bold rounded-xl" 
                        onClick={btnOnClickHandler}>Reply</button>
            </CardActions>
        </Card>
    );

};

export default FeedbackSummary;
