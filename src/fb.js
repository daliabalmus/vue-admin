
import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBIgux8TIvuQxLgOOMaIfQTuGPKsWSuq4o",
	authDomain: "vue-admin-app.firebaseapp.com",
	databaseURL: "https://vue-admin-app.firebaseio.com",
	projectId: "vue-admin-app",
	storageBucket: "vue-admin-app.appspot.com",
	messagingSenderId: "667957378569",
	appId: "1:667957378569:web:a6a3dac75aa72709"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// db.settings({timestampsInSnapshots: true});

export default db;
