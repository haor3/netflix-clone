import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from 'context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listenser = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUesr');
        setUser(null);
      }
    });

    return () => listenser();
  }, []);

  return { user };
}
