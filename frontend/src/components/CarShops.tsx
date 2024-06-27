import React from 'react'

import { useId } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { useContext } from 'react';
import { CartContext } from '@/context/cartContext';

interface cartShopsInterface {}


const CarShops: React.FC<cartShopsInterface> = () => {
  const cartCheckboxId = useId()

  const  { cartState } = useContext(CartContext);
   
  return (
    <div>
        CarShops
        <label className='' htmlFor={cartCheckboxId}>
          <IoCartOutline />
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden />
        <aside>
          {
            cartState.map((product , index) => (
              <div key={index} className='w-full h-8 flex'>
                <span>{product.product.name}</span>
                <span>{product.quantity}</span>
              </div>
            ))
          }

          <button >
            limpiar carro
          </button>
        </aside>
    </div>
  )
}

export default CarShops