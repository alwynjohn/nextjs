import React from 'react'

const News = ({data}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{data}</h1>
        </div>
    )
}

export default News

export async function getStaticProps(context){
    return {
        props:{
            data: context.preview?  'list of preview published data':"list of published data"
        }
    }
}
