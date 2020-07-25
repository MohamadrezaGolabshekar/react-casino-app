import { ActionType, IAction } from "./Interface";
import { ETabs } from "../DB/Interface";
const initialState = {
    tab: ETabs.GAMES_TAB_ITEMS,
    isStartSearchItems: false,
    searchTitle: ""
};

const appReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionType.CHANGE_TABS:
            return {
                ...state,
                tab: action.payload,
                isStartSearchItems: true
            };

        case ActionType.SEARCH_TITLE:
            return {
                ...state,
                searchTitle: action.payload,
                isStartSearchItems: true
            };

        case ActionType.SEARCH_CATEGORY:
            return {
                ...state,
                searchCategory: action.payload,
                isStartSearchItems: true
            };

        case ActionType.SEARCH_PROVIDER:
            return {
                ...state,
                searchProvider: action.payload,
                isStartSearchItems: true
            };

        case ActionType.SEARCH_STATUS:
            return {
                ...state,
                searchStatus: action.payload,
                isStartSearchItems: true
            };

        default:
            return state;
    }
};

export { appReducer, initialState };