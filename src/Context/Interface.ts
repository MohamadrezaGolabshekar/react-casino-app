export interface IAction {
    type: ActionType;
    payload: any;
}

export enum ActionType {
    TEST = "TEST"
}
