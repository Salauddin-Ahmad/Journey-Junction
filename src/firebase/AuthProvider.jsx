import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // // Theme state
  // const [isLoading, setIsLoading] = useState(true);

  // // Theme functions
  // const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   if (storedTheme) {
  //     setTheme(storedTheme);
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };
  // Theme functions ends here

  //   create new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  sign in existing user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google and github login
  const googleLogin = (email, password) => {
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogin = (email, password) => {
    return signInWithPopup(auth, gitHubProvider);
  };
  // sign out
  const logOut = () => {
    setUser(null);
    signOut(auth);
  };

  // obsever
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        // theme,
        // toggleTheme,
        // isLoading,
        user,
        createUser,
        signInUser,
        loading,
        gitHubLogin,
        googleLogin,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
