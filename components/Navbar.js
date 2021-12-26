import React from 'react'
import Link from 'next/link'
import styles from 'styles/navbar.module.css'
import { signIn,signOut,useSession} from 'next-auth/react'
const Navbar = () => {
    
    const { data: session } = useSession();
    return (

        <div className={styles.bg}>
            <ul className={styles.navbar}>
                <li><Link passhref href="#">Home</Link></li>
                <li><Link passhref href="#">About</Link></li>
                <li><Link passhref href="#">Blog</Link></li>
                {session? <li><Link href="/api/auth/signout"><a onClick={e=>{e.preventDefault(); signOut()}}>SignOut</a></Link> </li>:
                <li><Link href="/api/auth/signin"><a onClick={e=>{e.preventDefault(); signIn()}}>Signin</a></Link></li>
                }
                

            </ul>
        </div>
    )
}

export default Navbar
