import fb from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';
import 'firebase/storage';

import config from './config'
import { firebaseAction } from '../redux/actions'

export const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app()
export const auth = !fb.apps.length ? fb.initializeApp(config) : fb.auth()

auth.onAuthStateChanged(function (user) {
    firebaseAction.firebaseInitialized(true)

    if (user) {
        firebaseAction.firebaseUser(user)
    } else {
        firebaseAction.firebaseUser(null)
    }
});