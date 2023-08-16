import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: '338ac6015e87671f569c',
            clientSecret: '39b66e8efbc44bf02711ccf3cc7fc4dc7c744e01',
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)