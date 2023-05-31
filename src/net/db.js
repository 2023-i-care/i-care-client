import FirebaseApp from "./firebaseApp";
import {getFirestore} from 'firebase/firestore';

const db = getFirestore(FirebaseApp);

export default db;