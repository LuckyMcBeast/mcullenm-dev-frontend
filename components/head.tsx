import Head from "next/head"
import { Blog } from "../types/blog"

export default function blogHead(blog: Blog | null | undefined) {
    if (blog !== null && blog !== undefined) {
        return (<Head>
            <title>{`${blog?.title} - M. Cullen McClellan`}</title>
            <meta name="description" content={blog?.title} />
            <link rel="icon" href="/favicon.ico" />
        </Head>)
    }
    return (
        <Head>
            <title>M. Cullen McClellan</title>
            <meta name="description" content="mCullenMcClellan == Software Dev Blog" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}