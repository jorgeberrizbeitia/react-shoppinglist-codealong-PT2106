import React, { Component } from "react";
import AddForm from "./AddForm";
import Item from "./Item";
import Search from "./Search";

import Button from '@mui/material/Button';

const initialState = [
  { name: "water", price: 0.5 }, // => <p>water</p>
  { name: "chicken", price: 2 },
  { name: "sugar", price: 0.1 }
]

class ShoppingList extends Component {

  state = {
    list: initialState,
    filteredList: initialState,
    showForm: false
  }

  handleToggle = () => {
    // we will make the form appear/dissapear
    this.setState( { showForm: !this.state.showForm } )
  }

  // lifting the state up. 1. create the method in parent. Takes a parameter
  handleAddItem = (itemToAdd) => {
    // console.log(itemToAdd)
    // const clonedList = [...this.state.list] // cloning 
    // clonedList.unshift(itemToAdd) // adding
    // this.setState( { list: clonedList } )

    // better way to implement this.
    const newList = [itemToAdd, ...this.state.list]
    this.setState( { list: newList, filteredList: newList } )
  }

  handleFilter = (searchQuery) => {
    console.log("filter magic happening!", searchQuery)
    const filteredList = this.state.list.filter(eachItem => {
      return eachItem.name.includes(searchQuery)
    })

    this.setState( { filteredList: filteredList } )
  }

  render() {

    const { title } = this.props
    const { filteredList, showForm } = this.state

    return (
      <div>
        <h1>Shopping List</h1>
        <h2>{title}</h2>


        <Button variant="contained" style={{backgroundColor: "purple"}} onClick={this.handleToggle}>{showForm ? "Hide Form" : "Show Form"}</Button>

        {/* lifting the state up. 2. pass method as props */}
        { showForm && <AddForm handleAddItem={this.handleAddItem}/> }

        <Search handleFilter={this.handleFilter}/>

        {filteredList.map(eachItem => {
            // <p>{eachItem.name} {eachItem.price}</p>
          return (
            <Item key={eachItem.name + eachItem.price} potato={eachItem}/>
          )
        })}
      </div>
    );
  }
}

export default ShoppingList;



