import React from 'react'
import { Grommet, Box } from 'grommet'
import AppBar from './components/AppBar'
import ProductList from './components/ProductList'
import Searchbar from './components/Searchbar'
import './App.css';

class App extends React.Component {
  state = {
    value: '',
    search: '',
  }

  onClick = (e) => {
    // e.preventDefalut()
    this.setState({
      search: this.state.value,
    })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
      search: this.state.value,

    })
  }

  render(){
  return(
    <Grommet plain full>
      <Box direction="column" fill>

        <AppBar/>
        {/* Body */}
        <Box
          direction="row"
          pad="medium"
          fill
        >
          {/* Searchbar */}
          <Box width="medium">
            Name
            <Searchbar onChange={this.onChange} onClick={this.onClick} {...this.state}/>
          </Box>
          {/* End Searchbar */}
          {/* ProductList */}
          <Box flex>
            <ProductList {...this.state}/>
          </Box>
          {/* End ProductList */}
        </Box>
        {/* End Body */}
      </Box>
    </Grommet>
  );
  }
}

export default App;
