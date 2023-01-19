import Link from "next/link";
import { Blog } from "../types/blog";
import BlogCard from "./BlogCard";

const topLevelDivStyling =
  "grid grid-flow-row grid-cols-1 w-full max-w-screen lg:grid-cols-2 md:grid-cols-2 gap-10 p-10 overflow-x-hidden";

interface Props {
    blogs: Blog[]
}

function publishDateAsDate(publishDate: string): Date {
  const [month, day, year] = publishDate.split('-')
  return new Date(+year, +month -1, +day)
}

function sortBlogsByDate(blogs: Blog[]): Blog[] {
  return blogs.sort((a, b) => {
    return publishDateAsDate(b.publishDate).getTime() - publishDateAsDate(a.publishDate).getTime()
  })
}

export default function Blogs(props: Props) {
  if (props.blogs.length === 0 || props.blogs === undefined) {
    return <h2 className="text-one-dark-white text-center p-10 font-jetBrains">Well this is embarrassing...</h2>
  }
  return (
    <div className={topLevelDivStyling} data-testid="blogs">
      {sortBlogsByDate(props.blogs).map((data: Blog) => {
        return (
        <Link key={data.blogId} href={`/blog/${data.blogId}`}>
            <a><BlogCard key={data.blogId.toString()} blogData={data} /></a>
          </Link>
        );
      })}
    </div>
  );
}