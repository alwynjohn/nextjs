import React,{useState,useEffect} from 'react'
import { getSession, signIn} from 'next-auth/react';

const Dashboard = () => {
    const [isloading, setIsLoading] = useState(true);
    const [data, setData] = useState("")
    useEffect(() => {
        async function fetcher(){
            const session = await getSession();
            if(session){
            const dashboard = await fetch('http://localhost:4000/dashboard');
            const response = await dashboard.json()
            setData(response)
            setIsLoading(false)
            }else{
                signIn()
            }
        }
        fetcher()
    }, [])

    if(!data){
        return(
            <h1>Loading....</h1>
        )
    }
    return (
        <div>
                <div>
                    <h1>followers : {data.followers}</h1>
                    <h1>likes : {data.likes}</h1>
                    <h1>post : {data.post}</h1>
                </div>
            

            
        </div>
    )
}

export default Dashboard


export async function getServerSideProps(){
    const user = process.env.DB_USER
    console.log(user)
    return {
        props:{
            data:"hllo"
        }
    }
}