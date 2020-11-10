import * as firebase from 'firebase/app';
import config from './config'

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

firebase.initializeApp(config);

export const auth = firebase.auth();

export const storage = firebase.storage();

export const database = firebase.database();

auth.onAuthStateChanged(function (user) {

    // action.onAuthStateInit(true);

    console.log('user: ', user)

    if (user) {
        // action.onAuthStateChanged(user);
    } else {
        // action.onAuthStateChanged(null);
    }
});

export default firebase;