"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import CommentSend from "@/components/CommentSend";

export default function Login() {
    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={() => signOut()}>登出</button>
                <CommentSend avaer={session.user.image}/>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => signIn()}>登录</button>
        </>
    )
}