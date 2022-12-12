import React from 'react';
import {useState, useEffect} from 'react';
import SigninForm from '../components/auth/SigninForm';

const SigninPage = () => 
{
  const [signin, setSignin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    return(
      <div>
          <SigninForm signin = {signin}/>
      </div>
  );
};

export default SigninPage;
