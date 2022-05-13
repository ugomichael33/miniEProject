import { setIsLoggedIn } from './../utils/index';
import Action, {ActionType}  from '../actions/isLoggedIn'


const initialState = false


const Reducer = (state: boolean =  initialState, action: Action): boolean => {
    switch (action.type) {
        case ActionType.SET_IS_LOGGEDIN:
            return action.payload
        case ActionType.SET_IS_LOGGEDOUT:
            return action.payload
        default:
            return state  
    }
}


export default Reducer