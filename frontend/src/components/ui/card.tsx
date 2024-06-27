import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { InterfaceProducts , productCart } from '@/vite-env';
import frutilla from '../../utils/frutilla.jpeg';
import { IoCartOutline } from "react-icons/io5";

import { useCart } from '@/hooks/useCart';

interface ComponentProps {
  product: InterfaceProducts;
}

const CardBasic: React.FunctionComponent<ComponentProps> = ({ product }) => {
  
 const { addProduct, cart } = useCart();
  const [findProduct , setFindProduct ] = useState<productCart>();

 const productCart: productCart = {
    product: product,
    quantity: 0
  } 

 const handAddToCart = (product: productCart) => {
    addProduct(product)
    console.log(product)
 }

 useEffect(() => {
  const findCart = () => {
    const existProduct: productCart | undefined = cart.find( cartproduct => cartproduct.product.name == product.name);
    if(existProduct){
      setFindProduct(existProduct)
    } 
  } 

  findCart()
 },[cart, product])
 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={frutilla} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.price}
        </Card.Text>
        <div className='flex justify-end'>
        {
          findProduct? (
            <Button className='bg-red-500'>
            <IoCartOutline className='size-8' />
            </Button>
          ) : (
            <Button variant="primary"
            onClick={() => handAddToCart(productCart)}>
            <IoCartOutline className='size-8' />
            </Button>
          )
        }
         
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardBasic;