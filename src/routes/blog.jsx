import { createFileRoute } from '@tanstack/react-router'
import Blog from '../pages/Blog.jsx'
export const Route = createFileRoute('/blog')({
  component: Blog,
})


