import React from 'react';
import classes from './Burger.css'
import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    const transIngredients = Object.keys(props.ingredients)
    .map(ingr => {
        return [...Array(props.ingredients[ ingr ])].map((_, i) => {
            return <BurgerIngredient key={ ingr + 1 } type={ ingr }/>;
        })
    })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            { transIngredients }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}



export default burger;
