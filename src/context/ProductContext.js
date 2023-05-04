// create a context
// provider

import { createContext, useContext } from "react";

// consumer => useContext Hook
const AppContext = createContext();
const AppProvider =({children})=>{
    return <AppContext.Provider value="data">
        {children}
    </AppContext.Provider>
};
//custom hooks
const useProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext};
