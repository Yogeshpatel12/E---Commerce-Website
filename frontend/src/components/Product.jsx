import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <div >
      <Card className='my-3 p-3 rounded '>

        {/* link to particular product through particular id... data is present in product.js */}
        <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'></Card.Img>
        </Link>

        
        <Card.Body >
        <Link className='hover:underline underline-offset-2' to={`/product/${product._id}`}>
        <Card.Title>{product.name}</Card.Title>
        </Link>
          
          <Card.Text as="div">
            <div>
              {/* seprate rating component for seprate products */}
              <Rating value={product.rating} text={`${product.numReviews}  reviews`}>

              </Rating>
            </div>
          </Card.Text>
          <Card.Text>
            Rs.{product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product