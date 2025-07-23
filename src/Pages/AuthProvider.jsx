import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async currentUser => {
      setLoading(true);

      if (currentUser) {
        try {
          const res = await fetch(
            `https://metrimony-server-ten.vercel.app/users/${currentUser.email}`
          );
          const dbUser = await res.json();

          const updatedUser = {
            email: currentUser.email,
            name: currentUser.displayName,
            role: dbUser?.role || 'user',
          };

          setUser(updatedUser);
        } catch (error) {
          console.error('Failed to fetch user role:', error);
          setUser({ email: currentUser.email, role: 'user' });
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userInfo = {
    user,
    createUser,
    signInUser,
    loading,
    setLoading,
    logOut,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
