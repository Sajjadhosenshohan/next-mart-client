import ManageBrands from '@/components/modules/shop/brand'
import { getBrands } from '@/services/Shop/brand'
import React from 'react'

const ProductBrand = async() => {
  
  const {data} = await getBrands()
  return (
    <div><ManageBrands brands={data}/></div>
  )
}

export default ProductBrand