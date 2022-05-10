import Action, {ActionType}  from '../actions/studentName'


const initialState = ''


const Reducer = (state: string = initialState, action: Action): string => {
    switch (action.type) {
        case ActionType.SET_STUDENT_NAME:
            return action.payload
        case ActionType.CLEAR_STUDENT_NAME:
            return ''
        default:
            return state
    }
}


export default Reducer