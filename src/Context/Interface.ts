export interface IAction {
    type: ActionType;
    payload: any;
}

export enum ActionType {
    CHANGE_TABS = "CHANGE_TABS"
}
