import Link from "next/link"

export default function Header() {
  return (
    <div className="flex items-center mt-4 justify-between sticky">
      <div>
        <Link href="/">
          <h1 className='text-white text-xl font-bold'>Andrew Chang</h1>
        </Link>
        <p className='text-gray-500 text-xs'>ECE student at UT Austin</p>
      </div>

      <div className="flex gap-4">
        <Link href="/about" className="text-gray-500 hover:text-white">About</Link>
        <Link href="/projects" className="text-gray-500 hover:text-white">Projects</Link>
        <Link href="/blog" className="text-gray-500 hover:text-white">Blog</Link>
      </div>
    </div>
  )
}