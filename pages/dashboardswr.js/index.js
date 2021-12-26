import React from 'react'
import useSWR from 'swr'

async function fetcher(){
    const dash  = await fetch("http://localhost:4000/dashboard");
    const data = await dash.json();
    return data

}

const Dashswr = () => {
    const {data,error} = useSWR('dashboard',fetcher)
    if (data){
        return (
            
            <div>
            <h1>followers : {data.followers}</h1>
            <h1>likes : {data.likes}</h1>
            <h1>post : {data.post}</h1>
        </div>
        )
    }

    return (
        <div>
            <h1>Loading error</h1>        
        </div>
    )
}

export default Dashswr
