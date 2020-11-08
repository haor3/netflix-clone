import { useState, useEffect, useContext } from 'react';
import _ from 'lodash';

import { FirebaseContext } from 'context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = _.map(snapshot.docs, (doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));

        setContent(allContent);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return { [target]: content };
}
