import React, {useContext} from "react";

import {AppStore} from "./store/app";
import {AppApi} from "./services/app";

interface AppContextType {
    store: AppStore;
    api: AppApi;
}

export const AppContext = React.createContext<null | AppContextType>(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context as AppContextType;
};

