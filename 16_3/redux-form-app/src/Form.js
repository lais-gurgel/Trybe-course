import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addAssignment } from './actions';

const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

class Form extends Component {

  render () {
    console.log(this.state)
    const { add, value } = this.props;
    return (
      <form>
        <h1>Resume Application Form</h1>
        <fieldset>
          <label>Name: </label>
          <input name="name" type="name" value={value.name} onChange={(event) => add(event.target.name, event.target.value)} maxLength="40" required />
          <br />

          <label>Email: </label>
          <input name="email" type="text" value={value.email} onChange={(event) => add(event.target.name, event.target.value)} maxLength="50" placeholder="email@email.com" required />
          <br />

          <label>CPF: </label>
          <input name="cpf" type="text" value={value.cpf} onChange={(event) => add(event.target.name, event.target.value)} maxLength="11" required />
          <br />

          <label>Adress: </label>
          <input name="address" type="text" value={value.address} onChange={(event) => add(event.target.name, event.target.value)} maxLength="200" required />
          <br />

          <label>City: </label>
          <input name="city" type="text" value={value.city} onChange={(event) => add(event.target.name, event.target.value)}
          onBlur={this.handleOnBlur}
          maxLength="28" required />
          <br />
          
          <label>State: 
          <select name="countryState" value={value.countryState} onChange={(event) => add(event.target.name, event.target.value)} required >
            {states.map((value) => <option value={value} key={value}>{value}</option>)}
          </select>
          </label>
          <br />
          
          <div required>
            <label>Complement: </label>
            <input name="complement" type="radio" value="House" checked={value.complement === "House"} onChange={(event) => add(event.target.name, event.target.value)} required /> House
            <input name="complement" type="radio" value="Apartment" checked={value.complement === "Apartment"} onChange={(event) => add(event.target.name, event.target.value)} required /> Apartment
          </div>
        </fieldset>

        <fieldset>
          Curriculum summary:
          <textarea name="curriculum-summary" value={value.value} onChange={(event) => add(event.target.name, event.target.value)} maxLength="1000" required />
          <br />
          Job position:
          <textarea name="job-position" value={value.value} onChange={(event) => add(event.target.name, event.target.value)} maxLength="40" required />
          <br />
          Job description:
          <textarea name="job-position" value={value.value} onChange={(event) => add(event.target.name, event.target.value)} maxLength="500" required />
        </fieldset>
        
        <input type="submit" value="Submit"/> 
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { value: state.formReducer }
}

const mapDispatchToProps = dispatch => ({
  add: (name, value) => dispatch(addAssignment(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);