import AppStore from "./store/app";
import AppApi from "./services/app";
import React, {useContext} from "react";

interface AppContextType {
    store: AppStore;
    api: AppApi;
}

const AppContext = React.createContext<null | AppContextType>(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContextType;
};

export default AppContext;