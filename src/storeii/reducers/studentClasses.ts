import Action, {ActionType, StudentClass}  from '../actions/studentClasses'


const initialState = [] as StudentClass[]


const Reducer = (state: StudentClass[] = initialState, action: Action): StudentClass[] => {
    switch (action.type) {
        case ActionType.SET_STUDENT_CLASSES:
            return action.payload as StudentClass[]
        default:
            return state
    }
}


export default Reducer