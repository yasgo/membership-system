import { combineReducers } from "redux";

import firebase from "./firebase";
import alert from "./alert";

const rootReducer = combineReducers({
    firebase,
    alert
});

export default rootReducer;
