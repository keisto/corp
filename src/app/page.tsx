import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/performance">Performance</Link>
          </li>
          <li>
            <Link href="/reliability">Reliability</Link>
          </li>
          <li>
            <Link href="/scale">Scale</Link>
          </li>
        </ul>
      </nav>
      Home Page
    </div>
  )
}
