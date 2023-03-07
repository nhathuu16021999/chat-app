import React, { useState } from 'react';
import { db } from '../firebase/config';

/**
 *
 *
 * @param {*} collection
 * @param {*} condition
 */
const useFirestore = (collection, condition) => {
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    let collectionRef = db.collection(collection).orderBy('createAt');
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );
    }
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
    });
    return unsubscribe;
  }, [collection, condition, setDocuments]);
  return documents;
};

export default useFirestore;
