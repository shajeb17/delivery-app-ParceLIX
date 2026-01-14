import React, { useContext } from 'react';
import { AuthContext } from '../Context/FormContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    let {useInfo,loading}=useContext(AuthContext)
    let location=useLocation()
    
    if(loading){
        return <h1>loading ..</h1>;
    }
    if(useInfo){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRouter;