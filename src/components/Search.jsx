import React, { Component } from 'react'

import TextField from '@mui/material/TextField'; // RECOMMENDED
// import { TextField } from "@mui/material" // NOT RECOMMENDED


class Search extends Component {

  state = {
    search: ""
  }

  handleChange = ({target: { name, value }}) => {
    this.props.handleFilter(value)
    this.setState( { [name]: value } )
  }

  render() {
    return (
      <div>
        <TextField 
          id="outlined-basic" 
          variant="outlined" 
          name="search" 
          label="Search..."
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Search

