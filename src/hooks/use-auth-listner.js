import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listner = firebase.auth().onAuthStateChanged((authUser) => {
      // if we have a user we can store the user in LS
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        //we dont have authenticated user so we should clean LS
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listner();
  }, [firebase]);
  return { user };
}
