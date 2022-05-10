export enum ActionType {
    SET_STUDENT_NAME = 'SET_STUDENT_NAME',
    CLEAR_STUDENT_NAME = 'CLEAR_STUDENT_NAME',  
}

interface SetStudentNameAction {
    type: ActionType.SET_STUDENT_NAME,
    payload: string
}

interface clearStudentNameAction {
    type: ActionType.CLEAR_STUDENT_NAME,
}

type Action = SetStudentNameAction | clearStudentNameAction

export default Action