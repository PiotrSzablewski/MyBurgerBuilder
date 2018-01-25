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
        <p>Curent Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BulidControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingAdded(ctrl.type)}
                subtracted={() => props.ingSub(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordering}
            >order now</button>
    </div>
);

export default bulidControls;
