import * as TYPES from '../../actions-types/loading';
import { store } from '../..'

export const alertToggle = loadingData => {
    store.dispatch({ type: TYPES.LOADING_TOGGLE, loadingData: loadingData })
}