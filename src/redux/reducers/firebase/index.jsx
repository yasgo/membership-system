import * as TYPES from '../../actions-types/firebase'

const initialState = {
    user: {},
    firebaseInit: false
}

const firebase = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FIREBASE_INITIALIZED:
            return {
                ...state,
                firebaseInit: action.firebaseInit
            }

        case TYPES.FIREBASE_USER:
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default firebase