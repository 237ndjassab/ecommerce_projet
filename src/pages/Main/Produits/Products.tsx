import React from 'react'

import FooterProducts from './components/FooterProducts'
import NavProducts from './components/NavProducts'

const Products = () => {
  return (
    <div className='w-full'>
      <NavProducts lien="Home" souslien="product" product="OPPO Reno13 F 8GB 256GB New"/>
      Products
      <FooterProducts/>
    </div>
  )
}

export default Products