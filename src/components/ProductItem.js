import React from 'react'
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
} from 'grommet'

class ProductItem extends React.Component {
  render(){
    const { name, description, image, price } = this.props
    return(
        <Box
          direction="column"
          basis="medium"
          pad="small"
        >
          <Box>
            <Stack fill anchor="top-right">
              <Box height="small">
                <Image fit="cover" src={image} />  {/*this.props.image*/}
              </Box>
              <Box background="brand" pad="xsmall">
                <Text>{price}</Text> {/*this.props.price*/}
              </Box>
            </Stack>
          </Box>
          <Box>
            <Heading textAlign="center" level={4} margin={{vertical:'xsmall'}}>
              {name} {/*this.props.name*/}
            </Heading>
            <Text textAlign="center">
              {description}   {/*this.props.description*/}
            </Text>
          </Box>
        </Box>
    )
  }
}

export default ProductItem
