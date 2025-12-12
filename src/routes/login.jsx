import { createFileRoute } from '@tanstack/react-router'
import Login from '../pages/login.jsx'
export const Route = createFileRoute('/login')({
  component: Login,
})

