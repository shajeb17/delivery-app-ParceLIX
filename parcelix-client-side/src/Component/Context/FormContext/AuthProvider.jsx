import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../../Firebase/Firebase.auth';

const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    let [useInfo,setUserInfo]=useState("")
    let [loading,setLoading]=useState(true)
    let googleSignIn=()=>{
       return signInWithPopup(auth,provider)
    }
    let createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    let signinUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    let signoutUser=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        let unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUserInfo(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    
    let users={
        googleSignIn,
        createUser,
        signinUser,
        signoutUser,
        useInfo,
        loading
    }
   
   
    return (
     <AuthContext.Provider value={users}>
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;