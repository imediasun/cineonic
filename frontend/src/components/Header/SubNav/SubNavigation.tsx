import React, {Fragment, useContext} from "react";
import classes from "../Header.module.css";
import {TbLock, TbLockOpen} from "react-icons/tb";
import {NavLink} from "react-router-dom";
import {ROUTE_LOGIN} from "../../../utils/routes";
import authContext from "../../../context/AuthContext/AuthContext";
import {Auth} from "../../../utils/types";
import {FaUser} from "react-icons/fa"

const SubNavigation = ():JSX.Element => {
    const authCtx = useContext<Auth>(authContext)

    return  (
        <section className={classes.sub_header}>
            <div className={classes.sub_header_container}>
                <div className={classes.sub_header_img}>
                    <img src="/images/BASF_s.png" alt="basf-logo"/>
                </div>
                <div className={classes.sub_header_menu}>
                    <ul>
                        {
                            authCtx.isAuthed &&
                            (
                                <li>
                                    <NavLink
                                        to={"/"}
                                        className={classes.sub_header_lock}
                                    >
                                        <FaUser />
                                        user-name
                                    </NavLink>
                                </li>
                            )
                        }
                        <li>
                            {
                                authCtx.isAuthed
                                ?
                                    (<NavLink
                                        to={ROUTE_LOGIN}
                                        className={classes.sub_header_lock}
                                    >
                                        <TbLockOpen />
                                        Log out
                                    </NavLink>)
                                :
                                    (<NavLink
                                    to={ROUTE_LOGIN}
                                    className={classes.sub_header_lock}
                                    >
                                        <TbLock />
                                        Log in
                                    </NavLink>)

                            }
                        </li>
                        <li>
                            Hide Banner
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SubNavigation;