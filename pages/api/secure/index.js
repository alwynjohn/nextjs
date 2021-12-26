import { getSession } from "next-auth/react";

export default async function secureHandler(req,res){
    const session = await getSession({req});
    if(session){
        res.status(200).json({message:"authorised sucessfully",session});
    }else{
        res.status(401).json({message:"authorised failed"});
    }
   
}