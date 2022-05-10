
import {ActionType}  from '../actions/studentClasses';
import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType as StudentActionType } from '../actions/studentName'; 


export const getStudentClasses = (dispatch: Dispatch) => async (studentName:string) => {
    const {data} = await axios.get('')
    if (data) {
        dispatch({
            type: ActionType.SET_STUDENT_CLASSES,
            payload: data
        })
    }
}

export const setStudentName = (dispatch: Dispatch) => async (studentName:string) => {
        dispatch({
            type: StudentActionType.SET_STUDENT_NAME,
            payload: studentName
        })
}



