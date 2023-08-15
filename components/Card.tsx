import { Project } from "@/app/projects/page";
import Image from "next/image";
import Link from "next/link";
import { GitHub } from "./Icons";

export default function Card({
  title,
  date,
  description,
  imgSrc,
  repo,
  visit,
}: Project): React.ReactNode {
  return (
    <div className="flex rounded-lg p-4 border hover:bg-gray-600 dark:border-gray-400">
      <div className="flex gap-2">
        <div>
          <div className="my-2">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <p className="text-md">{description}</p>
          <div className="mt-4 flex gap-4">
            {repo && (
              <Link href={repo}>
                <div className="flex gap-2 items-center border p-2 rounded-lg">
                  <GitHub />
                  GitHub Repo
                </div>
              </Link>
            )}
            {visit && <button className="border p-2 rounded-lg">Visit</button>}
          </div>
        </div>

        <Image
          className="rounded-lg w-1/3 sm:w-lg aspect-square"
          src={imgSrc}
          height={100}
          width={100}
          alt="project thumbnail"
        />
      </div>
    </div>
  );
}
