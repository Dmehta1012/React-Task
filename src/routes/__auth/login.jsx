import { createFileRoute } from '@tanstack/react-router'
import Login from '../../components/pages/login.jsx'
export const Route = createFileRoute('/__auth/login')({
  component: Login,
})

