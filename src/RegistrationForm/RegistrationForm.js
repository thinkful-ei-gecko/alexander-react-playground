import React, { Component } from 'react';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
  /* Using event object to collect values */
  handleSubmit(event) {
    event.preventDefault();
    const name= event.target.name.value;
    const password= event.target.password.value;
    console.log('Name:', name);
    console.log('Passwords:', password);
  }

  /* Using ref attribute to collect values*/
  // constructor(props) {
  //   super(props);
  //   this.nameInput = React.createRef();
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const name = this.nameInput.current.value;
  //   //then do things with the name!:
  //   console.log('Name:', name);
  // }
  //Attach this ref to the input elements props for name:
  //ref={this.nameInput}


  render(){
    return(
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Register</h2>
        <div className="registration__hint">*required field</div>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" className="registration__control"
            name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input type="password" className="registration__control"
            name="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="repeatedPassword">Repeat Password *</label>
          <input type="password" className="registration__control"
            name="repeatPassword" id="repeatPassword" />
        </div>

        <div className="registration__button__group">
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Save
          </button>
        </div>
      </form>
    )
  }
}