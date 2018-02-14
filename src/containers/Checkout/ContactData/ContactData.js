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
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true,
          minLenght: 3
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCODE: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your zip Code'
        },
        value: '',
        validation: {
          required: true,
          minLenght: 5,
          maxLenght: 5,
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation: {
          required: true,
          minLenght: 4,
          mustHave: '@'
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [{
              value: 'fastest',
              displayValue: 'Fastest'
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest'
            }
          ]
        },
        value: '',
        validation: {},
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  }
  orderHandler = (e, input) => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
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
  };
  validationCheck(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLenght) {
      isValid = value.length >= rules.minLenght && isValid
    }
    if (rules.maxLenght) {
      isValid = value.length <= rules.maxLenght && isValid
    }
    if (rules.mustHave) {
      isValid = value.includes(rules.mustHave) && isValid
    }
    return isValid;
  }
  inputChangedHandler = (e, formId) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[formId]
    };
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.validationCheck(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[formId] = updatedFormElement;
    let formIsValid = true;
    for(let formId in updatedOrderForm){
        formIsValid = updatedOrderForm[formId].valid && formIsValid;
    }
    console.log(updatedFormElement);
    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formIsValid
    });
  }
  render() {
    const formArr = [];
    for (let key in this.state.orderForm) {
      formArr.push({
        id: key,
        config: this.state.orderForm[key],

      })
    }
    let form = (
      <form onSubmit={this.orderHandler}>
            {formArr.map(formEl => (
                <Input
                    key={formEl.id}
                    elementType={formEl.config.elementType}
                    elementConfig={formEl.config.elementConfig}
                    value={formEl.config.value}
                    changed={(e) => this.inputChangedHandler(e, formEl.id)}
                    touched={formEl.config.touched}
                    invalid={!formEl.config.valid}
                    shouldValidate={formEl.config.validation}
                 />
            ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
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
