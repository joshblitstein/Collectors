import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPAYmH0iQIPzBZKNbRB_iRyuiahzLg_7Q",
    authDomain: "collectors-c24cc.firebaseapp.com", 
    projectId: "collectors-c24cc",
    storageBucket: "collectors-c24cc.appspot.com",
    messagingSenderId: "118515337316",
    appId: "1:118515337316:web:2dd78dee7291f70d4af771",
    measurementId: "G-PDRSTE1LRR" 
  };

  const firebase = initializeApp(firebaseConfig); 

  export default getFirestore();