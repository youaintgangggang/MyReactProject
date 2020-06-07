import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEU6KLLw0l5BXKMBhMxTi2kJOaGyjspQ0",
  authDomain: "reactclientpanel-c5757.firebaseapp.com",
  databaseURL: "https://reactclientpanel-c5757.firebaseio.com",
  projectId: "reactclientpanel-c5757",
  storageBucket: "reactclientpanel-c5757.appspot.com",
  messagingSenderId: "224447508542",
  appId: "1:224447508542:web:275855edc361a16a77e16f",
  measurementId: "G-RY2D2YT89L",
};
//react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};
//Init firebase instance

firebase.initializeApp(firebaseConfig);
//Init firestore
//const firestore = firebase.firestore();
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
//Create Initial State
const initialState = {};

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
