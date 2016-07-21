import firebase from 'firebase';

export const app = firebase.initializeApp({
    apiKey: process.env.READING_KEY,
    authDomain: process.env.READING_DOMAIN,
    databaseURL: process.env.READING_DATABASE,
    storageBucket: process.env.READING_STORAGE
});


export const auth = app.auth();
export const database = app.database();

export default app;
