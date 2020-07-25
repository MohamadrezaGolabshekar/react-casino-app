import { ActionType, IAction } from "./Interface";
import { ETabs } from "../DB/Interface";
const initialState = {
    skip: 0,
    limit: 20,
    tab: ETabs.GAMES_TAB_ITEMS,
    isStartSearchItems: false,
    searchTitle: "",
    searchCategory: "",
    searchProvider: "",
    searchStatus: ""
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

        case ActionType.COMPLETE_SEARCH:
            return {
                ...state,
                isStartSearchItems: false
            };

        case ActionType.START_SEARCH:
            return {
                ...state,
                isStartSearchItems: true
            };

        case ActionType.RESET_SEARCH:
            return {
                ...state,
                skip: 0,
                limit: 20,
                tab: ETabs.GAMES_TAB_ITEMS,
                isStartSearchItems: false,
                searchTitle: "",
                searchCategory: "",
                searchProvider: "",
                searchStatus: ""
            };

        default:
            return state;
    }
};

export { appReducer, initialState };