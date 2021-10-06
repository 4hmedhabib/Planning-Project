// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDi1WI96TyqQ-24ph1U1-tKR9ZMy6vk-Ls',
	authDomain: 'project-planning-3b890.firebaseapp.com',
	projectId: 'project-planning-3b890',
	storageBucket: 'project-planning-3b890.appspot.com',
	messagingSenderId: '139128524189',
	appId: '1:139128524189:web:8ddc0f5a8029db90c27374'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
