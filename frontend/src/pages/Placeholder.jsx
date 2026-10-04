import { Link } from 'react-router-dom'
import { usePage } from '../lib/usePage.js'
export default function NotFound({ name = 'Page not found' }) {
  usePage(name)
  return (
    <section className="container-page py-24">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="mt-4 max-w-[60ch] text-muted">That address does not exist. Go back to the home page or contact me.</p>
      <Link to="/" className="btn btn-secondary mt-6">Home</Link>
    </section>
  )
}
