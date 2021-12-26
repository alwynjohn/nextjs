import React from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
const CatchBlog = () => {
    const Router = useRouter();
    const {blog} = Router.query;
    console.log(Router.query)
    console.log(blog);
    return (
        <div>
            <h1>

            default page for every blog{blog}
            </h1>
            <Link href="/blog/first">
                <a>Blog 1</a>
            </Link>
        </div>
    )
}

export default CatchBlog
