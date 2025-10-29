import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-medium">404</h2>
      <p className="mt-2 text-muted-foreground">Page not found.</p>
      <Link to="/" className="mt-6 inline-block underline">Go home</Link>
    </section>
  )
}


