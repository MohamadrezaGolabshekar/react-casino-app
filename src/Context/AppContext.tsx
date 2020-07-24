import React, {
  useContext,
  FunctionComponent,
  useReducer,
  createContext,
} from "react";
import { appReducer, initialState } from "./reducer";

const AppContext = createContext({});

const useAppContext = () => {
  try {
    return useContext(AppContext);
  } catch (e) {
    throw new Error(`useStateContext hook must be used in a functional component within the AppContext provider.`);
  }
};

const Provider: FunctionComponent = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={[state, dispatch] as any} {...props} />;
};

export { useAppContext, Provider };
