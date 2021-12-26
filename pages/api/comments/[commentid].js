import { comments } from "../../../comments/data"

export default function commentid(req,res){
    const {commentid} = req.query
    const comment = comments.find((comment)=> comment.id==commentid);
    const commentIndex = comments.findIndex((comment)=> comment.id==commentid);
    comments.splice(commentIndex,1);
    console.log(comments)
    res.status(200).json(comment)
}