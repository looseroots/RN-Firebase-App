// Import firebase from this module instead of the default package
import * as firebase from 'firebase' // This line should not be elsewhere

firebase.initializeApp(Expo.Constants.manifest.firebase);

export default firebase; 