export enum ActionType {
    SET_IS_LOGGEDIN = 'SET_IS_LOGGEDIN', 
    SET_IS_LOGGEDOUT = 'SET_IS_LOGGEDOUT', 
}

interface SetIsLoggedInAction {
    type: ActionType.SET_IS_LOGGEDIN,
    payload: boolean
}

interface clearIsLoggedInAction { 
    type: ActionType.SET_IS_LOGGEDOUT,
    payload: boolean
}

type Action = SetIsLoggedInAction | clearIsLoggedInAction

export default Action