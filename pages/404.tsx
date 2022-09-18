import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="grid h-screen min-h-screen w-full place-content-center">
      404 | Not Found
      <Link href="/">Go Back</Link>
    </div>
  )
}
