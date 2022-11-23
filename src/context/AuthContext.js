import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        case "AUTH_IS_READY":
            return {
                ...state,
                user: action.payload,
                authIsReady: true
            }
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
    });

    //communicate with firebase and check changes in the Authentication state
    //If there something change this function is triggered (login, logout, signup)
    useEffect(() => {
        const unsub = projectAuth.onAuthStateChanged((user) => {
            dispatch({ type: "AUTH_IS_READY", payload: user})
            unsub()
        })
    }, [])

    console.log("AuthContext state:", state);
    //dispatch({ type: "LOGIN", payload: { email: "" } }); 
        
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


