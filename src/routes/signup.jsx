import { createFileRoute } from '@tanstack/react-router'
import Signup from '../pages/Signup.jsx'

export const Route = createFileRoute('/signup')({
  component: Signup,
})