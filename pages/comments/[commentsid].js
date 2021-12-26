import React from 'react'
import { comments } from '../../comments/data'
const Commentsdetail = ({comment}) => {
    return (
        <div>
            <h1>{comment.id}</h1>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Commentsdetail


export async function getStaticPaths(){
    return{
        paths:[
            {
                params:{ commentsid:"1"}
            },
            {
                params:{ commentsid:"2"}
            },
            {
                params:{ commentsid:"3"}
            }
            
        ],
        fallback:false,
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const {commentsid} = params;

    const comment = comments.find((comment)=> comment.id==commentsid )
    
    return{
        props:{
            comment,
        }
    }
}