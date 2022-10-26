import type { NextPage } from 'next'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import { Blog } from '../types/blog'
import Blogs from '../components/Blogs'
import blogHead from '../components/head'
import { getBlogs } from '../client/getBlogs'

interface Props {
  blogs: Blog[]
}

export async function getStaticProps() {
  let blogs : Blog[] = await getBlogs();
  return {
    props: {
      blogs : blogs
    }
  }
}

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <div className="appLevelStyling">
      {blogHead(undefined)}
      <div className="topLevelDivStyling">
        <SideBar />
        <div className='w-full'>
          <TopBar />
          <Blogs blogs={blogs} />
        </div>
      </div>
    </div>
  )
}

export default Home
