import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAJihrt2Ia3yguQslBeeqRmWGFtr5hkijQ",
    authDomain: "solano-diseno.firebaseapp.com",
    projectId: "solano-diseno",
    storageBucket: "solano-diseno.appspot.com",
    messagingSenderId: "639851492985",
    appId: "1:639851492985:web:d16e07915404d79e2c46a8"
};

const firebaseApp =initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

initializeApp(firebaseConfig);


