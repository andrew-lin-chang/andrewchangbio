import Link from "next/link"

export default function Header() {
  return (
    <div className="flex items-center mt-4 justify-between sticky">
      <div>
        <Link href="/">
          <h1 className='text-xl font-bold'>Andrew Chang</h1>
        </Link>
        <p className='text-xs'>ECE student at UT Austin</p>
      </div>

      <div className="flex gap-4">
        <Link href="/resume" className="hover:font-bold">Resume</Link>
        <Link href="/projects" className="hover:font-bold">Projects</Link>
        <Link href="/thoughts" className="hover:font-bold">Thoughts</Link>
      </div>
    </div>
  )
}