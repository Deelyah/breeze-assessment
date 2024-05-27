import { db } from '@/firebase/config';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
export const createProfile = async (uid, data) => {
  const profile = collection(db, 'profile');
  const result = setDoc(doc(profile, uid), {
    data: data
  });
  return result;
};

export const getUserByID = async (uid) => {
  const docRef = doc(db, 'profile', uid);
    const docSnap = await getDoc(docRef);
  return docSnap
};
