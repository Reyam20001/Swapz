import {useContext} from 'react';
import AuthContext from '../../store/authContext'; 
import NavItem from './NavItem';

const Navbar = () => 
{
  const authContext = useContext(AuthContext); 

  return (
    <nav>
      <ul className="flex bg-sky-900 justify-center items-center">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/evaluations/AllFeedback">Feedback</NavItem>
        <NavItem to="/evaluations/AddFeedback">Add Feedback</NavItem>
        <NavItem to="/user/getWishlists">Wish List</NavItem>
        <NavItem to="/request/requestProduct">Requested Items</NavItem>
        <NavItem to="/exchange">Exchangeable Items</NavItem>
        <NavItem to="/exchange/add">Add Exchangeable Item</NavItem>
        <NavItem to="/resell">Resellable Items</NavItem>
        <NavItem to="/resell/insert">Add Item</NavItem>
        {!authContext.token && <NavItem to="/signin">Sign In</NavItem>}
        {!authContext.token && <NavItem to="/signup">Sign Up</NavItem>}
      </ul>
    </nav>
  );
};

export default Navbar;
