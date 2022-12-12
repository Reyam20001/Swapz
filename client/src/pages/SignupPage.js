import React from 'react';
import {useState, useEffect} from 'react';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => 
{
  const [signup, setSignup] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  return(
    <div>
        <SignupForm signup = {signup}/>
    </div>
  )
};

export default SignupPage;
