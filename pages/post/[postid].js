import React from 'react'

const Postid = ({data}) => {

    if(!data){
        return<h1>Loading.....</h1>
    }
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    )
}

export default Postid

export async function getStaticPaths(){
    return {
        paths:[
            {
               params: {postid:'1'},
            }
        ],
        fallback:false,

    }
}

export async function getStaticProps(context){
    const {params} = context;

    const data = await fetch(`http://localhost:4000/products/${params.postid}`)
    const response = await data.json()
     
    return{
        props:{
            data:response
        },
        revalidate:10,
    }

}