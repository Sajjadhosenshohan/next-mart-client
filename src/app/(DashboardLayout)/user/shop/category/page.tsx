import ManageCategory from '@/components/modules/shop/category'
import { getCategories } from '@/services/Shop/category'
import React from 'react'

const ProductCategory = async() => {
  
  const {data} = await getCategories()
  return (
    <div><ManageCategory categories={data}/></div>
  )
}

export default ProductCategory