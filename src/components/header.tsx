import Link from 'next/link'

export default function Header() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
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
  )
}
