import { createFileRoute } from '@tanstack/react-router'
import Contact from '../pages/Contact'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

// function RouteComponent() {
//   return <div>Hello "/Contact"!</div>
// }
