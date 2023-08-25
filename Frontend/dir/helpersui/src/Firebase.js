import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAKWp3Y6kpksTGgwuCkABv6YFOgx8udvAc",
  authDomain: "helpers--planet.firebaseapp.com",
  projectId: "helpers--planet",
  storageBucket: "helpers--planet.appspot.com",
  messagingSenderId: "965545433571",
  appId: "1:965545433571:web:63bbd4b08aaa732b6728d6",
  measurementId: "G-YD9E379L3N"
};


firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;