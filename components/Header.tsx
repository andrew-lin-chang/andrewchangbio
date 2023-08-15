import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <div className="flex w-full items-center mt-4 justify-between sticky top-0 left-0 right-0 py-4 opacity-90 bg-white dark:bg-black z-10">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-bold hover:text-indigo-500">{`{ac}`}</h1>
        </Link>
      </div>

      <div className="flex gap-4 ">
        <Link href="/resume" className="font-bold hover:text-indigo-500">
          Resume
        </Link>
        <Link href="/projects" className="font-bold hover:text-indigo-500">
          Projects
        </Link>
        <Link href="/thoughts" className="font-bold hover:text-indigo-500">
          Thoughts
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
