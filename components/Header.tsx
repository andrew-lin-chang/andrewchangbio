import Link from "next/link"

export default function Header() {
  return (
    <div className="flex items-center mt-4 justify-between sticky">
      <div>
        <h1 className='text-white text-3xl font-bold'>Andrew Chang</h1>
        <h2 className='text-white text-xs'>ECE student at UT Austin</h2>
      </div>

      <div className="flex gap-2">
        <Link href="/about" className="text-white">About</Link>
        <Link href="/projects" className="text-white">Projects</Link>
        <Link href="/blog" className="text-white">Blog</Link>
      </div>
    </div>
  )
}