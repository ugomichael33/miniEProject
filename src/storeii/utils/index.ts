
import {ActionType}  from '../actions/studentClasses';
import { Dispatch } from 'redux'
import { ActionType as StudentActionType } from '../actions/studentName'; 
import { ActionType as IsLoggedInActionType } from '../actions/isLoggedIn';
import Airtable from 'airtable'


var base = new Airtable({apiKey: 'keyaoBGaNqpBIYwjS'}).base('app8ZbcPx7dkpOnP0')

export const getStudentClasses = (dispatch: Dispatch) => async (studentName:string) => {
    const query = { filterByFormula: `AND({Students}, "${studentName}")`}
    base('Classes').select(query).eachPage(function page(records, fetchNextPage) {
        const newStudentClasses = records.map(record => ({
            name: record.get('Name'),
            students: record.get('Students')
        }))
        dispatch({
            type: ActionType.SET_STUDENT_CLASSES,
            payload: newStudentClasses
        })
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    
}

export const setStudentName = (dispatch: Dispatch) => async (studentName:string) => {
        dispatch({
            type: StudentActionType.SET_STUDENT_NAME,
            payload: studentName
        })
}

export const clearStudentName = (dispatch: Dispatch) => async () => {
        dispatch({
            type: StudentActionType.CLEAR_STUDENT_NAME,
            payload: ''
        })
}

export const setIsLoggedIn = (dispatch: Dispatch) => async () => {
        dispatch({
            type: IsLoggedInActionType.SET_IS_LOGGEDIN,
            payload: true
        })
}

export const setIsLoggedOut = (dispatch: Dispatch) => async () => {
        dispatch({
            type: IsLoggedInActionType.SET_IS_LOGGEDOUT,
            payload: false
        })
}



