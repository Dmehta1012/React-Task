import { createFileRoute } from '@tanstack/react-router'
import Signup from '../../components/pages/Signup.jsx'

export const Route = createFileRoute('/__auth/signup')({
  component: Signup,
})