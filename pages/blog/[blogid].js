import React from 'react'
import { useRouter } from 'next/dist/client/router';
const Blogid = () => {
    const Router = useRouter();
    
    
    return (
        <div>
            <h1>New blogd welcome {Router.query.blogid}</h1>      
        </div>
    )
}

export default Blogid


