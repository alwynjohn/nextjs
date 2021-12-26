import React from 'react'

const User = ({data}) => {
    return (
        <div>
                helooooo
                {data.map((user)=>{
                    return(
                        <>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                        </>
                    )
                })}
        </div>
    )
}

export default User


export async function getStaticProps() {
    
    const user = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await user.json();
    
    
    return {
        props:{
            data:response,
        }
    }
}