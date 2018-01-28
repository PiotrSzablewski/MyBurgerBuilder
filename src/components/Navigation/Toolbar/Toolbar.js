import React from 'react';
import classes from './Toolbar.css';
import DrawerToggel from '../SideDraw/DrawerToggel/DrawerToggel'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems.js'
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggel clicked={props.opened}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;
