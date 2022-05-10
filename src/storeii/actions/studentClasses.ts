export enum ActionType {
    SET_STUDENT_CLASSES = 'SET_STUDENT_CLASSES'  
}

export type StudentClass = {
    name: string,
    students: string[]
}

interface SetStudentClassesAction {
    type: ActionType. SET_STUDENT_CLASSES
    payload: StudentClass[]
}


type Action = SetStudentClassesAction

export default Action