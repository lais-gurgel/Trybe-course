import React, { Component } from 'react'

const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

class Form extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      name: '',
    }
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    })
  }

  handleOnBlur(event) {

  }

  render () {
  return (
    <form>
      <h1>Resume Application Form</h1>
      <fieldset>
        <label>Name: </label>
        <input name="name" type="name" value={this.state.name.toUpperCase()} onChange={this.handleChange} maxLength="40" required />
        <br />

        <label>Email: </label>
        <input name="email" type="text" value={this.state.email} onChange={this.handleChange} maxLength="50" placeholder="email@email.com" required />
        <br />

        <label>CPF: </label>
        <input name="cpf" type="text" value={this.state.cpf} onChange={this.handleChange} maxLength="11" required />
        <br />

        <label>Adress: </label>
        <input name="address" type="text" value={this.state.address} onChange={this.handleChange} maxLength="200" required />
        <br />

        <label>City: </label>
        <input name="city" type="text" value={this.state.city} onChange={this.handleChange}
        onBlur={this.handleOnBlur}
        maxLength="28" required />
        <br />
        
        <label>State: 
        <select name="countryState" value={this.state.countryState} onChange={this.handleChange} required >
          {states.map((value) => <option value={value} key={value}>{value}</option>)}
        </select>
        </label>
        <br />
        
        <div required>
          <label>Complement: </label>
          <input name="complement" type="radio" value="House" checked={this.state.complement === "House"} onChange={this.handleChange} required /> House
          <input name="complement" type="radio" value="Apartment" checked={this.state.complement === "Apartment"} onChange={this.handleChange} required /> Apartment
        </div>
      </fieldset>

      <fieldset>
        Curriculum summary:
        <textarea name="curriculum-summary" value={this.state.value} onChange={this.handleChange} maxLength="1000" required />
        <br />
        Job position:
        <textarea name="job-position" value={this.state.value} onChange={this.handleChange} maxLength="40" required />
        <br />
        Job description:
        <textarea name="job-position" value={this.state.value} onChange={this.handleChange} maxLength="500" required />
      </fieldset>
      
      <input type="submit" value="Submit"/> 
    </form>
  );
  }
}

export default Form;
