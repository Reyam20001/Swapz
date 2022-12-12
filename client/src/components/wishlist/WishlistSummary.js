import { useNavigate } from 'react-router-dom';
import Card from '../../UI/card/Card';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';

const WishlistSummary = (props) => 
{
//   const navigate = useNavigate();

//   const btnOnClickHandler = () => 
//   {
//     navigate(`/products/${props.product._id}`);
//   };

  return (
    <Card>
      <CardHeader>
        <img
          className="object-scale-down h-[300px]"
          src={props.prods.image}
          alt={props.prods.title}
        />
      </CardHeader>
      <CardBody>
        <h3 className="font-bold">{props.prods.title}</h3>
        <h4>{props.prods.price} EGP</h4>
      </CardBody>
      <CardActions>
        {/* <button
          className="bg-white py-3 px-10 font-bold rounded-xl"
          onClick={btnOnClickHandler}
        >
          View
        </button> */}
      </CardActions>
    </Card>
  );
};

export default WishlistSummary;
