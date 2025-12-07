import React from 'react'

import FooterProducts from './components/FooterProductDescribe/FooterProducts'
import NavProducts from './components/NavProducts'
import RelatedProduct from './components/FooterImages/RelatedProduct'
import HeaderProduct from './components/HeaderProduct/HeaderProduct'

const Products = () => {
  return (
    <div className='w-full'>
      <NavProducts lien="Home" souslien="product" product="OPPO Reno13 F 8GB 256GB New"/>
      <HeaderProduct />
      <FooterProducts />
      <RelatedProduct />
    </div>
  )
}

export default Products