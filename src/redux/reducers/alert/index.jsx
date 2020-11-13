import * as TYPES from '../../actions-types/alert'

const initialState = {
    message: '',
    isShow: false,
    isSuccess: false
}

const alert = (state = initialState, action) => {
    switch (action.type) {

        case TYPES.ALERT_TOGGLE:
            return {
                ...state,
                message: action.message,
                isShow: action.isShow,
                isSuccess: action.isSuccess
            }

        default:
            return state;
    }
}

export default alert