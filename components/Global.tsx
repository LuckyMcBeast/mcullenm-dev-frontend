import { Blog } from "../types/blog";
import BlogHead from "./BlogHead";
import GradientLine from "./GradientLine";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export function Global(
  { children, blog }:
    {
      children: React.ReactNode | React.ReactNode[],
      blog: Blog | undefined | null
    }
) {
  return (
    <div className="appLevelStyling">
      {BlogHead(blog)}
      <div className="topLevelDivStyling">
        <SideBar />
        <div className='w-full'>
          <TopBar />
          <GradientLine/>
          {children}
        </div>
      </div>
    </div>
  );
}