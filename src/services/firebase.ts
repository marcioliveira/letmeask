import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

//Configuração abaixo foi criada pelo Firebase na hora da criação da Integração do Projeto Firebase com o REACT
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSANGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

firebase.initializeApp(firebaseConfig);

//quando precisarmos utilizar esses recursos na aplicação
<<<<<<< HEAD
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }
=======
export const auth = firebase.auth();
export const database = firebase.database();
>>>>>>> d6c68b0ed5498c23a2420c1ec6c31a855201f8e9
