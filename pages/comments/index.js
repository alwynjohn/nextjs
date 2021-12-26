import React,{useState} from 'react'

const Index = () => {
    const [data, setData] = useState([]);
    const [comment, setComment] = useState("")
    async function fetchcomments(){
        const data = await fetch('/api/comments');
        const response = await data.json();
        setData(response)
    }

    async function setCommentapi(){
        const newdata = await fetch('/api/comments',{
            method:"POST",
            headers:{'Content-Type':"application/json"},
            body: JSON.stringify({comment})
        })

        const response  = newdata.json()
        fetchcomments()
        console.log(response)
         
    }

    async function deleteComment(id){
        const newdata = await fetch(`/api/comments/${id}`);
        const response = await newdata.json();
        console.log(response)
        fetchcomments()
    }

    return (
        <div>
            <input type="text" placeholder="enter comment" value={comment} onChange={e=>  setComment(e.target.value)}/>
            <button onClick={setCommentapi}>Set comment</button>

            <button onClick={fetchcomments}>get Comments</button>     
            {
                data.map((comments)=>{
                   return  <div key={comments.id}>
                        <h1>{comments.id}</h1>
                        <p>{comments.comment}</p>
                        <button onClick={()=> deleteComment(comments.id)}>delete</button>
                        <hr></hr>
                    </div>

                })
            }
        </div>
    )
}

export default Index
