import React from 'react'
import Link from 'next/link'
const index = ({data}) => {
    
    return (
        <div>
            helloo
           {
               data.map((post)=>{
                   
                   return <>
                                <h1>{post.title}</h1>
                            
                       </>
                    
               })
           }
        </div>
    )
}

export default index;

export async function getStaticProps(){
    const post = await fetch("http://localhost:4000/products")
    const response = await post.json()

    return {
        props:{
            data:response,
        }
    }
}