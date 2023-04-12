import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    }
    const googleSignIn = googleProvider =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,profile);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loading,
        signIn,
        updateUserProfile,
        logOut,
         googleSignIn};
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;