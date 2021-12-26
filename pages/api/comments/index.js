import { comments } from "../../../comments/data"

function ytcomments(req,res){
    if(req.method=="GET"){
        res.status(200).json(comments);
    }else if(req.method=="POST"){
        const comment = req.body.comment;
        
        const newComment = { id:Date.now(),
            comment
        }
        comments.push(newComment)
        res.status(200).json(newComment);
    }
    
}

export default ytcomments;