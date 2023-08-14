import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <div className="flex w-full items-center mt-4 justify-between sticky top-0 left-0 right-0 py-4 opacity-90 bg-white dark:bg-black">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-bold">{`{ac}`}</h1>
        </Link>
      </div>

      <div className="flex gap-4">
        <Link href="/resume" className="hover:font-bold">
          Resume
        </Link>
        <Link href="/projects" className="hover:font-bold">
          Projects
        </Link>
        <Link href="/thoughts" className="hover:font-bold">
          Thoughts
        </Link>
        <ThemeSwitcher />
      </div>

    </div>
  );
}
