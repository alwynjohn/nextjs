import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers:[
        GithubProvider({
            clientId:"8c5456f96bf974ab0f64",
            clientSecret:"0dec7262f5c1e1000dcf1f22e8f99de788ffd3d3",
        })
    ]

})