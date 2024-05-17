import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from './Product.jsx'

function Homepage() {
  return (
    <div className='p-4'>
      <Row>
        {products.map((product)=>(
          <Col key={product._id} sm={12} md={6} lg={4}>
          <Product product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Homepage