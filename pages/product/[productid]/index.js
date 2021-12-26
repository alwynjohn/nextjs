import React from 'react'
import { useRouter } from 'next/dist/client/router'
const ProductId = () => {
   const Router = useRouter();
    return (
        <div>
              <h1>New Product id  {Router.query.productid}</h1>       
        </div>
    )
}

export default ProductId
