
import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBO8PoAoW9yxfjn8fo1Zt7NVY0YEzDoggc",
	authDomain: "vue-admin-tuts.firebaseapp.com",
	databaseURL: "https://vue-admin-tuts.firebaseio.com",
	projectId: "vue-admin-tuts",
	storageBucket: "vue-admin-tuts.appspot.com",
	messagingSenderId: "306148421023",
	appId: "1:306148421023:web:d9b48d8f83aef20a78e1aa",
	measurementId: "G-YBC27C8S3H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// db.settings({timestampsInSnapshots: true});

export default db;
