import Action, {ActionType, StudentClass}  from '../actions/studentClasses'


const initialState =  [
    // {
    //     name: 'cs103',
    //     students: ['joe', 'jerry', 'sid']
    // },
    // {
    //     name: 'cs102',
    //     students: ['joe']
    // },
    // {
    //     name: 'cs100',
    //     students: ['joe','tony', 'sid']
    // },
    // {
    //     name: 'cs101',
    //     students: ['joe', 'jerry', 'sid', 'barry']
    // }
] as StudentClass[]


const Reducer = (state: StudentClass[] = initialState, action: Action): StudentClass[] => {
    switch (action.type) {
        case ActionType.SET_STUDENT_CLASSES:
            return action.payload as StudentClass[]
        default:
            return state
    }
}


export default Reducer