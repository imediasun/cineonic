import React from "react";
import MainNavigation from "./MainNav/MainNavigation";
import SubNavigation from "./SubNav/SubNavigation";
import classes from "./Header.module.css";

const Header = ():JSX.Element => {
    return (
        <header>
            <SubNavigation />
            <MainNavigation />
            <section className={classes.banner}>
                <img src="/images/fields5.jpeg" alt="field"/>
            </section>
        </header>
    )
}

export default Header;