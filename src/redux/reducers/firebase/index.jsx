import * as Types from '../../actions-types/firebase'

const reducer = (state, action) => {
    switch (action.type) {
        case 'HEADER_COLOR_CHANGE':
            return {
                ...state,
                headerColor: action.color
            }

        default:
            return state;
    }
}

export default reducer