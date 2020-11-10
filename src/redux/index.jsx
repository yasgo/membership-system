import { createStore } from 'redux';

const initialState = {
    user: {}
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
)

function reducer(state, action) {
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