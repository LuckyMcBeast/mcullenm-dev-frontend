import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import { getBlog, getBlogs } from "../../client/getBlogs"
import Code from "../../components/Code"
import { Global } from "../../components/Global"
import { Blog, Content, Meta } from "../../types/blog"



interface Params extends ParsedUrlQuery {
    id: string
}

interface Props {
    blog?: Blog | null
}

export const getStaticPaths: GetStaticPaths = async () => {
    let blogs: Blog[] = await getBlogs();

    const paths = blogs.map((blog) => {
        const blogId = blog.blogId.toString()
        return { params: { id: blogId } }
    })

    return { paths, fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const params = context.params as Params
    let blog: Blog | null = await getBlog(params.id)

    return {
        props: {
            blog: blog
        }
    }
}

const divLevelStyling = "flex flex-col p-10 text-one-dark-white gap-y-3 font-ubuntu w-screen sm:w-full"
const contentDivStyling = "flex flex-col gap-y-3 p-1"
const h1Styling = "text-2xl font-bold text-rocket-blue-600"
const h3Styling = "text-sm italic text-one-dark-lightYellow"

function contentP(position: number, value: string): JSX.Element {
    return <p key={position} className="break-words" data-testid={`content-${position}`}>{value}</p>
}

function contentCode(position: number, value: string, meta: Meta): JSX.Element {
    return <Code key={position} code={value} meta={meta} data-testid={`content-${position}`}/>
}

function contentA(position: number, value: string, meta: Meta | null): JSX.Element {
    if(meta?.altText){
        return <a key={position} href={value} data-testid={`content-${position}`}>{meta.altText}</a>
    }
    return <a href={value}>{value}</a>
}

function displayContent(contents: Content[] | null | undefined) {
    return contents?.map(
        ({type, position, value, meta}) => {
            switch(type) {
                case "p": {
                    return contentP(position, value)
                }
                case "a": {
                    return contentA(position, value, meta)
                }
                case "code": {
                    if(meta?.lang) {
                        return contentCode(position, value, meta)
                    }
                }
                default:
                    return <div key={position}></div>
            }
        }
    )
}


function BlogView(props: Props): JSX.Element {
    if (props.blog === null || props.blog === undefined || Object.keys(props.blog).length === 0) {
        return <h2 className="text-one-dark-white text-center p-10">Looks like nothing is here...</h2>
    } else {
        return (
            <div className={divLevelStyling} data-testid="blog-view">
                <h1 className={h1Styling} data-testid="blog-title">{props.blog!.title}</h1>
                <h3 className={h3Styling} data-testid="publish">{props.blog!.publishDate}</h3>
                <div className={contentDivStyling} data-testid="content">
                    {displayContent(props.blog!.content)}
                </div>
            </div>)
    }
}


const BlogPage: NextPage<Props> = ({ blog }) => {
    return (
        <Global blog={blog}>
            <BlogView blog={blog}/>
        </Global>
    )
}

export default BlogPage