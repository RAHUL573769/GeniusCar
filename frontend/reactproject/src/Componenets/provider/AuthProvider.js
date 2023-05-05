import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import app from "../FireBase/FireBaseInit";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (auth, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signItWithGoogle = (auth, provider) => {
    return signInWithPopup(auth, provider);
  };

  const handleLogOut = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const handleLogin1 = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    createUser,
    handleLogOut,
    auth,
    signItWithGoogle,
    user,
    handleLogin1
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
