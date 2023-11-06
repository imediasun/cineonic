import React, {createContext} from "react";
import {Auth} from "../../utils/types";

const AuthContext = createContext<Auth>({
    isAuthed: false,
    setAuthed: (authed: boolean) => {}
})

export default AuthContext;