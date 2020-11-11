import fb from 'firebase'
import config from './config'
import { firebaseAction } from '../redux/actions'

// export const auth = fb.auth();
// export const storage = fb.storage();
// export const database = fb.database();

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

// import { useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import { firebaseAction } from '../redux/actions'

// import { auth } from './init'

// import 'firebase/auth';
// import 'firebase/storage';
// import 'firebase/database';

// // export const auth = firebase.auth();

// // export const storage = firebase.storage();

// // export const database = firebase.database();


// const FirebaseInitialized = () => {
//     const dispatch = useDispatch()

//     useEffect(() => {
//         auth.onAuthStateChanged(function (user) {

//             // action.onAuthStateInit(true);

//             dispatch(firebaseAction.firebaseInitialized(true))

//             console.log('user: ', user)

//             if (user) {
//                 // action.onAuthStateChanged(user);
//             } else {
//                 // action.onAuthStateChanged(null);
//             }
//         });
//     }, [dispatch])



//     return (
//         <></>
//     )
// }

// export default FirebaseInitialized;