import React from "react";
import classes from "./Login.module.css";
import {TextField, Button} from '@mui/material';
import {Link} from "react-router-dom";
import {ROUTE_PRODUCTS_AND_MIXTURES} from "../../utils/routes";

const Login = ():JSX.Element => {
    return (
        <div className={classes.login}>
            <div className={classes.login_header}>
                Login
            </div>
            <form className={classes.login_form}>
                <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    autoComplete="current-password"
                    required={true}
                    placeholder={"firstname.lastname@basf.com"}
                    className={classes.login_form_textfield}
                />
                <Button
                    variant="contained"
                    className={classes.login_form_button}
                >
                    Validate
                </Button>
            </form>
            <div className={classes.login_message}>
                <p className={classes.lightred_message_color}>
                    Only referenced users with an account can connect.
                </p>
                <p className={classes.lightblue_message_color}>
                    The login allows access to the advanced features of the application (e.g. the laboratory test order) and is reserved for RTR, RAC and RDE.
                </p>
                <p className={classes.lightblue_message_color}>
                    The consultation of information does not require an account and is accessible <Link to={ROUTE_PRODUCTS_AND_MIXTURES}>here</Link>.
                </p>
            </div>
        </div>
    )
}

export default Login;