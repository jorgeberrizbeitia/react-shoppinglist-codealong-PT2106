import React, { Component } from 'react'

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

class AddForm extends Component {

  state = {
    inputName: "",
    inputPrice: ""
  }

  // best way to manage controlled input fields
  handleChange = ({target: { name, value }}) => {
    // console.log(event.target.value)
    // console.log(event.target.name)
    this.setState( { [name]: value } )
  }

  // without destructuring event
  // handleChange = (event) => {
  //   // console.log(event.target.value)
  //   // console.log(event.target.name)
  //   this.setState( { [event.target.name]: event.target.value } )
  // }

  // having another method for different input fields. DON'T
  // handleNumberChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState( { price: event.target.value } )
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitting my item")
    // we need to create the new item obj
    const itemObj = {
      name: this.state.inputName,
      price: this.state.inputPrice
    }
    console.log(itemObj)
    // we need to update the state with the new item
    // lifting the state up. 3. invoking the method with the data to pass
    this.props.handleAddItem(itemObj)
    this.setState( { inputName: "", inputPrice: 0 } )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          {/* <label htmlFor="name"></label>
          <input onChange={this.handleChange} type="text" name="inputName" value={this.state.inputName}/>

          <label htmlFor="price"></label>
          <input onChange={this.handleChange} type="number" name="inputPrice" value={this.state.inputPrice}/>

          <button>Add Item</button> */}

          <TextField 
            onChange={this.handleChange} 
            id="outlined-basic" 
            label="Name" 
            name="inputName" 
            variant="outlined" 
            value={this.state.inputName}
          />

          <TextField 
            onChange={this.handleChange} 
            id="outlined-basic" 
            label="Price" 
            name="inputPrice" 
            variant="outlined" 
            value={this.state.inputPrice}
          />

          <IconButton type="submit" color="success">
            <AddShoppingCartIcon />
          </IconButton>

        </form>
      </div>
    )
  }
}

export default AddForm
