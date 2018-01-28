import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi/Auxi'
import classes from './SideDraw.css';
const sideDraw = ( props ) => {
    let attClasses = [classes.SideDraw, classes.Close, ];
    if(props.open){
        attClasses = [classes.SideDraw, classes.Opend];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
}


export default sideDraw;
