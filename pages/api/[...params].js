export default function allroutes(req,res){
    const {params} = req.query;
    
    res.status(200).json({name:"catch all routes"});
}