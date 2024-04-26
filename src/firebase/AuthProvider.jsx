import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import  { createContext, useState, useEffect } from "react";
import auth from "./firebase.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Theme state
  const [isLoading, setIsLoading] = useState(true);

  // Theme functions
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
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

  const googleLogin = (email, password) => {
    return signInWithPopup(auth, googleProvider)
  }
  const gitHubLogin = (email, password) => {
    return signInWithPopup(auth, gitHubProvider)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        signInUser,
        isLoading,
        theme,
        toggleTheme,
        gitHubLogin,
        googleLogin,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
