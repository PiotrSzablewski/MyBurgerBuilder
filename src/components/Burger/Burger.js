import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
  let transIngredients = Object.keys(props.ingredients)
    .map(ingr => {
      return [...Array(props.ingredients[ingr])].map((_, i) => {
        return <BurgerIngredient key={ ingr + i } type={ ingr }/>;
      })
    }).reduce((prev, next) => {
      return prev.concat(next);
    }, []);
  if (transIngredients.length === 0) {
    transIngredients = <p>Please add some ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { transIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
  );
}



export default burger;
