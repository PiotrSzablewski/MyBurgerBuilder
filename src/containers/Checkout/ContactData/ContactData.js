import React, {
  Component
} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'
import classes from './ContactData.css';
import axios from '../../../axios-orders';
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
          elementType:'input',
          elementConfig:{
              type: 'text',
              placeholder: 'Your Name'
          },
          value: ''
      },
      street: {
          elementType:'input',
          elementConfig:{
              type: 'text',
              placeholder: 'Your Street'
          },
          value: ''
      },
      zipCODE: {
          elementType:'input',
          elementConfig:{
              type: 'text',
              placeholder: 'Your zip Code'
          },
          value: ''
      },
      country: {
          elementType:'input',
          elementConfig:{
              type: 'text',
              placeholder: 'Your Country'
          },
          value: ''
      },
      email: {
          elementType:'input',
          elementConfig:{
              type: 'email',
              placeholder: 'Your Email'
          },
          value: ''
      },
      deliveryMethod: {
          elementType:'select',
          elementConfig:{
             options: [
                 {value: 'fastest', displayValue: 'Fastest'},
                 {value: 'cheapest', displayValue: 'Cheapest'}
             ]
          },
          value: ''
      },
    },
    loading: false
  }
  orderHandler = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,

    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({
          loading: false,
        });
      });
  }
  render() {
    const formArr =[];
    for(let key in this.state.orderForm){
        formArr.push({
            id: key,
            config: this.state.orderForm[key],

        })
    }
    let form = (
      <form >
            {formArr.map(formEl => (
                <Input
                    key={formEl.id}
                    elementType={formEl.config.elementType}
                    elementConfig={formEl.config.elementConfig}
                    value={formEl.config.value}
                 />
            ))}
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
    </form>
    );
    if (this.state.loading) {
      form = <Spinner/>
    }
    return (
      <div  className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            {form}
      </div>
    );
  }

}

export default ContactData;
