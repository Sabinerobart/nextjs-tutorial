import Link from 'next/link'
import AllCentered from '../components/allCentered/allCentered'

export default function Custom404() {
  return (
    <AllCentered>
      <div>
        <h1>This is a 404</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </AllCentered>
  )
}