import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address:{
            street: '',
            postelCode: ''
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
          price: this.props.totalPrice,
          customer: {
            name: 'Piotr',
            adress: {
              street: 'Test str 2',
              zipCODE: '232422',
              country: 'Poland'
            },
            email: 'test@test.test',
          },
          deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
          .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
          })
          .catch(error => {
            this.setState({
              loading: false,
            });
          });
    }
    render() {
        let form = (
            <form >
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                <input className={classes.Input} type="text" name="postal" placeholder="Your postal code"/>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>
        }
        return (
            <div  className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </div>
        );
    }

}

export default ContactData;
