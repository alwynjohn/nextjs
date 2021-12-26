import React from 'react'
import { useRouter } from 'next/dist/client/router'
const ReviewId = () => {
   const Router = useRouter();
    return (
        <div>
              <h1>New Productid {Router.query.productid} and  Review {Router.query.reviewId}</h1>       
        </div>
    )
}

export default ReviewId
