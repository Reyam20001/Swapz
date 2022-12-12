import {BrowserRouter, Route, Routes} from 'react-router-dom';
/* import AuthProvider from './store/AuthProvider'; */
import Layout from './UI/layout/Layout';

import FeedbackPage from './pages/FeedbackPage';
import FeedbacksPage from './pages/FeedbacksPage';
import AddFeedbackPage from './pages/AddFeedbackPage';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import WishlistPage from './pages/WishlistPage';
import RequestItemPage from './pages/RequestItemPage';
import ExchangeItemsPage from './pages/ExchangeItemsPage';
import ExchangeItemPage from './pages/ExchangeItemPage';
import MakeOfferPage from './pages/makeOfferPage';
import EditExchangePage from './pages/editExchangePage';
import AddExchangePage from './pages/AddExchangePage';
import RItemsPage from './pages/RItemsPage';
import RItemPage from './pages/RItemPage';
import AddOffer from './pages/AddOffer';
import AddResellableItemPage from './pages/AddResellableItemPage';

const App = () =>
{
  return(
  
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path = "/" element = {<HomePage />}/>
            {/* <Route path = "/evaluations/:FeedbackID" element = {<FeedbackPage />}/> */}
            <Route path = "/evaluations/AllFeedback" element = {<FeedbacksPage/>} />
            <Route path = "/evaluations/AddFeedback" element = {<AddFeedbackPage />}/>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/user/getWishlists" element={<WishlistPage />} />
            <Route path="/request/requestProduct" element={<RequestItemPage />} />
            <Route path="/exchange" element={<ExchangeItemsPage/>} />
            <Route path="/exchange/item/:itemID" element={<ExchangeItemPage />} />
            <Route path="/exchange/delete/:itemID" element={<ExchangeItemPage />} />
            <Route path="/exchange/makeOffer/:itemID" element={<MakeOfferPage />} />
            <Route path="/exchange/edit/:itemID" element={<EditExchangePage />} />
            <Route path="/exchange/add" element={<AddExchangePage />} />
            <Route path="/resell" element={<RItemsPage />} />
            <Route path="/resell/oneTime/:itemID" element={<RItemPage />} />
            <Route path="/resell/insert" element={<AddResellableItemPage />} />
            <Route path="/resell/negotiate/:itemID" element={<AddOffer />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    
  );
};

export default App;