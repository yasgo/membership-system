import * as TYPES from '../../actions-types/loading'

const initialState = {
    isShow: false
}

const loading = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.LOADING_TOGGLE:
            return {
                ...state,
                isShow: action.isShow,
            }

        default:
            return state;
    }
}

export default loading