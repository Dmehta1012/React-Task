import { createFileRoute } from '@tanstack/react-router'
import Contact from '../../components/pages/Contact'

export const Route = createFileRoute('/__landing/contact')({
  component: Contact,
})

// function RouteComponent() {
//   return <div>Hello "/Contact"!</div>
// }
