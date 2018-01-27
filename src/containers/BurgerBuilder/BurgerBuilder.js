import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BulidControls/BulidControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
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
        totalPrice: 4,
        toPurchase:false,
        ordering:false
    }
    purchaseContinueHandler = ()=>{
        alert('You did continue!!')
    }
    orderingHandler = () => {
        this.setState({ordering: true})
    }
    cancelHandler = () =>{
        this.setState({ordering: false})
    }
    updateToPurchase = (price) => {
        if(price !== 4){
            console.log('cos:',44 )
            this.setState({toPurchase:true})
        }else {
            this.setState({toPurchase:false})
        }
    }
    addingIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;
        const priceToAdd = ING_PRICES[type]
        const newPrice = this.state.totalPrice + priceToAdd;
        this.setState({totalPrice: newPrice, ingredients: newIngredients});
        this.updateToPurchase(newPrice);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        const newCount = oldCount - 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = newCount;
        const priceToSub = ING_PRICES[type]
        const newPrice = this.state.totalPrice - priceToSub;
        this.setState({totalPrice: newPrice, ingredients: newIngredients});
        this.updateToPurchase(newPrice);
    }
  render(){
      const disable = {
          ...this.state.ingredients
      }
      for(let key in disable){
          disable[key] = !disable[key]
      }
    return(
      <Aux>
          <Modal show={this.state.ordering} modalClosed={this.cancelHandler}>
              <OrderSummary
                  ingredients={this.state.ingredients}
                  cancel={this.cancelHandler}
                  purchaseContinue={this.purchaseContinueHandler}
                  price={this.state.totalPrice.toFixed(2)}
              />
          </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BulidControls
            ingAdded={this.addingIngredientHandler}
            ingSub={this.removeIngredientHandler}
            disabled={disable}
            ordering={this.orderingHandler}
            price={this.state.totalPrice}
            purchasable={this.state.toPurchase}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
