import React, { useContext } from 'react';
import {AuthContext} from '../../../Context/AuthProvider/AuthProvider'
import { useNavigate, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
          .then(() => {
            navigate('/login')
           })
          .catch(err => console.log(err));
      }
    return (
        <div className='w-1/2 mx-auto mt-12'>
            <p className='text-red-700'>Something went to wrong!</p>
            <p className='text-red-700'>{error.statusText||error.message}</p>
            <h4 className='text-3xl'>Pleace <button className='btn' onClick={handleLogOut}>Log out</button></h4>
        </div>
    );
};

export default DisplayError;