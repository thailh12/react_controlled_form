import React, { Component } from 'react';
import './App.css';
import './mui.min.css';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

// const formatNumber = number => {
//   number = (number + '').replace(/[\D\s_]+/g, '');
//   number = number ? parseInt(number, 10) : '';
//   return number === '' ? '' : number.toLocaleString('en-US');
// };
// const isUndefined = (v) => typeof v === 'undefined';
// const isDefined = (v) => typeof v !== 'undefined';

const checkingTypes = {
  phonenumber: 'phonenumber',
  email: 'email'
};

function FormError(props) {
  if (props.isHidden) {
    return null;
  }
  return <p>{props.errorMessage}</p>;
}
const validateInput = (type, checkingText) => {
  if (type === checkingTypes.phonenumber) {
    const regexp = /^\d{10,11}$/; // regular expression - checking if phone number contains only 10 - 11 numbers
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return {
        isInputValid: true,
        errorMessage: ''
      };
    } else {
      return {
        isInputValid: false,
        errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
      };
    }
  }

  if (type === checkingTypes.email) {
    const regexp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i; // regular expression - check valid email
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return {
        isInputValid: true,
        errorMessage: ''
      };
    } else {
      return {
        isInputValid: false,
        errorMessage: 'Email không hợp lệ'
      };
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: '',
        errorMessage: ''
      },
      phonenumber: {
        value: '',
        errorMessage: ''
      }
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    const newState = { ...this.state[name] };
    newState.value = value;
    this.setState({ [name]: newState });
  };

  handleInputValidation = (event) => {
    const { name } = event.target;
    const { isInputValid, errorMessage } = validateInput(
      name,
      this.state[name].value
    );
    const newState = { ...this.state[name] };
    newState.isInputValid = isInputValid;
    newState.errorMessage = errorMessage;
    this.setState({ [name]: newState });
  };

  render() {
    return (
      <div className="App">
        <Form>
          <legend>wifi Login</legend>
          <Input
            style={{ borderColor: 'green' }}
            label="Email Address"
            type="text"
            name="email"
            floatingLabel={true}
            required={true}
            onChange={this.handleInput}
            onBlur={this.handleInputValidation}
          />
          <FormError errorMessage={this.state.email.errorMessage} />
          <Input
            label="Phone Number"
            type="text"
            name="phonenumber"
            floatingLabel={true}
            required={true}
            onChange={this.handleInput}
            onBlur={this.handleInputValidation}
          />
          <FormError errorMessage={this.state.phonenumber.errorMessage} />
          <Button color="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
