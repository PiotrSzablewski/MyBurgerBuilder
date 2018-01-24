import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BulidControls/BulidControls';

const ING_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }
    addingIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;
        const priceToAdd = ING_PRICES[type]
        const newPrice = this.state.totalPrice + priceToAdd;
        this.setState({totalPrice: newPrice, ingredients: newIngredients})
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(!oldCount){
            return
        }
        const newCount = oldCount - 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;
        const priceToSub = ING_PRICES[type]
        const newPrice = this.state.totalPrice - priceToSub;
        this.setState({totalPrice: newPrice, ingredients: newIngredients})
    }
  render(){
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BulidControls
            ingAdded={this.addingIngredientHandler}
            ingSub={this.removeIngredientHandler}

        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
