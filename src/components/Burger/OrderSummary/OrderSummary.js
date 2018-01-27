import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(ingr => {
      return <li key={ingr}><span style={{textTransform:'capitalize'}}>{ingr}</span>: {props.ingredients[ingr]}</li>
    });

  return (
    <Aux>
            <h3>Your order summary</h3>
            <p>Burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.cancel}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>Continue</Button>
    </Aux>
  );
}



export default orderSummary;
