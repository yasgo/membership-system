import { combineReducers } from "redux";

import firebase from "./firebase";
import alert from "./alert";
import loading from "./loading";

const rootReducer = combineReducers({
    firebase,
    alert,
    loading
});

export default rootReducer;
