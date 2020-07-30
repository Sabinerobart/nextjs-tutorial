import Link from 'next/link'
import AllCentered from '../components/allCentered/allCentered'

export default function Success() {
  return (
    <AllCentered>
      <div>
        <h1>Your message was sent !</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </AllCentered>
  )
}