import React from 'react'
import {Box, TextInput, Button, FormField, Form} from 'grommet'

class Searchbar extends React.Component {
  // state = {
  //   value:"",
  //   searchResults: null,
  // }


  render(){
    // const {value, setValue} = this.state
    const { value, onChange, onClick } = this.props
    // const { value } = this.props
    return(
      <Box direction="row">
        <Box  margin="xsmall">
          <Form>
            <Box  direction="row"  margin="xsmall">
              <FormField label=""  placeholder="type here" value={value} onChange={onChange} htmlFor="text-input"/>
            </Box>
            <Box direction="row"  margin="xsmall">
              {/* {value} */}
              <Button type="submit" label="Search" onClick={onClick} />
            </Box>
          </Form>
        </Box>
      </Box>
    )
  }
}


export default Searchbar;
