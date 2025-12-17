import Blogs from '@/components/pages/Blog.jsx'
import { createFileRoute } from '@tanstack/react-router'
// import Blog from '../../pages/Blog.jsx'
export const Route = createFileRoute('/__landing/blog')({
  component: Blogs,
})


