import React, {useReducer, useState} from "react";
import {Auth} from "../../utils/types";
import AuthContext from "./AuthContext";

const authUserReducer = () => {

}


type AuthProviderProps = {
    children :JSX.Element | JSX.Element[];
}

const AuthProvider = ({children} :AuthProviderProps) => {

    const [authed, setAuthed] = useState(false);

    const setAuthHandler = () => {
        setAuthed(!authed)
    }

    const authCtx: Auth = {
        isAuthed: authed,
        setAuthed: setAuthHandler
    }

    return(
        <AuthContext.Provider value={authCtx}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;