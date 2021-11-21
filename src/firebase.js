import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAXjnV4u5Cac0V5MZ8tcrhpmSmtXAZm50o",
    authDomain: "linkedin-clone-460ea.firebaseapp.com",
    projectId: "linkedin-clone-460ea",
    storageBucket: "linkedin-clone-460ea.appspot.com",
    messagingSenderId: "602175711031",
    appId: "1:602175711031:web:8560c1edc913a0eba85cb2",
    measurementId: "G-G247M7DZTS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export{auth,provider,storage};
  export default db;