import React from 'react';
import classes from './BulidControls.css';
import BulidControl from './BulidControl/BulidControl';
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
const bulidControls = (props) => (
    <div className={classes.BulidControls}>
        {controls.map(ctrl => (
            <BulidControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingAdded(ctrl.type)}
                subtracted={() => props.ingSub(ctrl.type)}
                disabled={props.disabled[ctrl.type]}

            />
        ))}

    </div>
);

export default bulidControls;
