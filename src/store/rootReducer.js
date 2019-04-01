import { combineReducers } from "redux";

const rootReducer = combineReducers({
    users: userReducer
})

export {
    rootReducer
}