import type { NextPage } from 'next'
import { Blog } from '../types/blog'
import Blogs from '../components/Blogs'
import { getBlogs } from '../client/getBlogs'
import About from '../components/About'
import { Global } from '../components/Global'

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
    <Global blog={undefined}>
      <About />
      <Blogs blogs={blogs} />
    </Global>
  )
}

export default Home
