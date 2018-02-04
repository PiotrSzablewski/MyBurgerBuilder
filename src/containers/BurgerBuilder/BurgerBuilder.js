import React, {
  Component
} from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BulidControls/BulidControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const ING_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    toPurchase: false,
    ordering: false,
    loading: false,
    error: false
  }
  componentDidMount() {
    axios.get('https://myburgerbuilder-5bfb9.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({
          ingredients: response.data
        });
    }).catch(error => {
        this.setState({error: true})
    });
  }
  purchaseContinueHandler = () => {

    const queryParams =[];
    for(let i in this.state.ingredients){
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
    });
  }
  orderingHandler = () => {
    this.setState({
      ordering: true
    })
  }
  cancelHandler = () => {
    this.setState({
      ordering: false
    })
  }
  updateToPurchase = (price) => {
    if (price !== 4) {
      this.setState({
        toPurchase: true
      })
    } else {
      this.setState({
        toPurchase: false
      })
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
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients
    });
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
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngredients
    });
    this.updateToPurchase(newPrice);
  }
  render() {
    const disable = {
      ...this.state.ingredients
    }
    let orderSummary = null;
    for (let key in disable) {
      disable[key] = !disable[key]
    }

    let burger = this.state.error ? <p>Ingredients can not be loaded!</p> : <Spinner />

    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      orderSummary = <OrderSummary
              ingredients={this.state.ingredients}
              cancel={this.cancelHandler}
              purchaseContinue={this.purchaseContinueHandler}
              price={this.state.totalPrice.toFixed(2)}
          />
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <Aux>
          <Modal show={this.state.ordering} modalClosed={this.cancelHandler}>
                {orderSummary}
          </Modal>
            {burger}
      </Aux>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);
