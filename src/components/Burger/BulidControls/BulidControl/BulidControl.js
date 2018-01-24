import React from 'react';
import classes from './BulidControl.css';
const bulidControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.subtracted}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

export default bulidControl;
