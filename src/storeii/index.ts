import { combineReducers } from "redux";
import studentNameReducer from "./reducers/studentName";
import studentClassesReducer from "./reducers/studentClasses";
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'



const reducers = combineReducers({
    studentName: studentNameReducer,
    studentClasses: studentClassesReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


export default store