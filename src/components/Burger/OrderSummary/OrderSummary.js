import React from 'react';
import Aux from '../../../hoc/Auxi'
const orderSummary = ( props ) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ingr =>{
            return <li key={ingr}><span style={{textTransform:'capitalize'}}>{ingr}</span>: {props.ingredients[ingr]}</li>
        });

    return(
        <Aux>
            <h3>Your order summary</h3>
            <p>Burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout...</p>
        </Aux>
    );
}



export default orderSummary;
