import React from "react";
import {NavLink} from "react-router-dom";
import {
    ROUTE_ADMINISTRATION_AREA, ROUTE_APPLICATION_USER_GUIDE,
    ROUTE_HOME,
    ROUTE_LABORATORY,
    ROUTE_ORDERS,
    ROUTE_PRODUCTS_AND_MIXTURES
} from "../../../utils/routes";
import classes from "./MainNavigation.module.css";
import {AiFillHome} from "react-icons/ai";

const MainNavigation = ():JSX.Element => {
    return (
        <nav className={classes.main_nav}>
            <ul>
                <li>
                    <NavLink
                        to={ROUTE_HOME}
                        className={({isActive}) => {
                            return isActive ? classes.active : classes.non_active;
                        }}
                    >
                        <AiFillHome size={25} />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={ROUTE_PRODUCTS_AND_MIXTURES}
                        className={({isActive}) => {
                            return isActive ? classes.active : classes.non_active;
                        }}
                    >
                        Products and mixtures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={ROUTE_ORDERS}
                        className={({isActive}) => {
                            return isActive ? classes.active : classes.non_active;
                        }}
                    >
                        Orders <span className={classes.bubble_indicator}>0</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={ROUTE_LABORATORY}
                        className={({isActive}) => {
                            return isActive ? classes.active : classes.non_active;
                        }}
                    >
                        Laboratory <span className={classes.bubble_indicator}>0</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={ROUTE_ADMINISTRATION_AREA}
                        className={({isActive}) => {
                            return isActive ? classes.active : classes.non_active;
                        }}
                    >
                        Administration Area
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={ROUTE_APPLICATION_USER_GUIDE}
                        className={({isActive}) => {
                            return isActive ? classes.active : classes.non_active;
                        }}
                    >
                        Application User Guide
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavigation;