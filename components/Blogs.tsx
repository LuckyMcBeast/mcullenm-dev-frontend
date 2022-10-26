import Link from "next/link";
import { Blog } from "../types/blog";
import BlogCard from "./BlogCard";

const topLevelDivStyling =
  "grid grid-flow-row grid-cols-1 w-full max-w-screen sm:grid-cols-3 gap-10 p-10 overflow-x-hidden";

interface Props {
    blogs: Blog[]
}

export default function Blogs(props: Props) {
  return (
    <div className={topLevelDivStyling} data-testid="blogs">
      {props.blogs.map((data: Blog) => {
        return (
        <Link key={data.blogId} href={`/blog/${data.blogId}`}>
            <a><BlogCard key={data.blogId.toString()} blogData={data} /></a>
          </Link>
        );
      })}
    </div>
  );
}