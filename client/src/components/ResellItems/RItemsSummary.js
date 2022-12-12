import { useNavigate } from 'react-router-dom';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';
import Card from '../../UI/card/Card';

const RItemsSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const btnOnClickHandler = () => {
    navigate(`/resell/oneTime/${props.item._id}`);
  };

  return (
    <Card>
      <CardHeader>
        <img
          className="object-scale-down h-[300px]"
          src={props.item.imgURL}
        />
      </CardHeader>
      <CardBody>
        <h3 className="font-bold">{props.item.title}</h3>
        <h5>{props.item.price} EGP</h5>
      </CardBody>
      <CardActions>
        <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
          View
        </button>
      </CardActions>
    </Card>
  );
};

export default RItemsSummary;
