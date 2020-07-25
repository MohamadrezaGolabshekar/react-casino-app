export interface IAction {
    type: ActionType;
    payload: any;
}

export enum ActionType {
    CHANGE_TABS = "CHANGE_TABS",
    SEARCH_TITLE = "SEARCH_TITLE",
    SEARCH_CATEGORY = "SEARCH_CATEGORY",
    SEARCH_PROVIDER = "SEARCH_PROVIDER",
    SEARCH_STATUS = "SEARCH_STATUS"
}
