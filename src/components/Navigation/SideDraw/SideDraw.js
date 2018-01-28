import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDraw.css';
const sideDraw = ( props ) => {

    return(
        <div className={classes.SideDraw}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
    );
}


export default sideDraw;
