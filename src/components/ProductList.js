import React from 'react'
import { Box } from 'grommet'
import ProductItem from './ProductItem'
import request from '../utils/request'

class ProductList extends React.Component {
  state ={
    data: []
  }

  componentDidMount() {
    this.fetchData()
    
  }

  componentDidUpdate(prevProps) {
    if(this.props.search !== prevProps.search){
      this.fetchData()
    }
  }


  fetchData = async () => {
  const { search } = this.props
  const newsearch = search.split(' ').join('-')
  const res = await request.get(`/products?filter=like(sku,*${newsearch}*)`)
  // const res = await request.get(`/products?filter=like(sku,*${search}*)`)
    console.log(res)
    const data =  res.data.data.map(item => {
      return {
        name: item.name,
        description: item.description,
        image: 'https://via.placeholder.com/300x400.png',
        price: item.meta.display_price.with_tax.formatted,
      }
    })
    this.setState({
      data,
    })
  }


  render(){
    const { data } = this.state
    console.log(data)
    return(
      <Box
        direction="column"
        pad="small"
        fill
      >
        <Box pad="small" background="light-3">
          Product List
        </Box>
        <Box
          pad="small"
          direction="row"
          fill
          wrap
          overflow="auto"
        >
          {
            data.map((product)=>(
              <ProductItem key={product.name} {...product}/>
            ))
          }
        </Box>
      </Box>
    )
  }
}

export default ProductList
