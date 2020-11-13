import * as TYPES from '../../actions-types/alert';
import { store } from '../..'

export const alertToggle = alertData => {
    store.dispatch({ type: TYPES.ALERT_TOGGLE, alertData: alertData })
}