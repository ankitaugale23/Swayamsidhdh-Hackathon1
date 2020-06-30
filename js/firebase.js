import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
	apiKey: 'AIzaSyDhz2KWMu0QUKziPbO5Aql4qbljwU09aac',
	authDomain: 'hackathon-e1052.firebaseapp.com',
	databaseURL: 'https://hackathon-e1052.firebaseio.com',
	projectId: 'hackathon-e1052',
	storageBucket: 'hackathon-e1052.appspot.com',
	messagingSenderId: '9834866629',
	appId: '1:9834866629:web:b0d2af20864badfbe10dac',
}

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
export default firebase
