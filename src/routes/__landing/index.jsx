import { createFileRoute } from '@tanstack/react-router'
import Home from '../../components/pages/Home.jsx'

export const Route = createFileRoute('/__landing/')({
  component: Home,
})