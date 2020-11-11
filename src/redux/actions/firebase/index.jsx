import * as TYPES from '../../actions-types/firebase';
import { store } from '../..'

export const firebaseInitialized = firebaseInit => {
    store.dispatch({ type: TYPES.FIREBASE_INITIALIZED, firebaseInit: firebaseInit })
}

export const firebaseUser = user => {
    store.dispatch({ type: TYPES.FIREBASE_USER, user: user })
}