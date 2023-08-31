import { Project } from "@/app/projects/page";
import Image from "next/image";
import Link from "next/link";
import { GitHub } from "./Icons";
import { GitHubRepoButton, Visit } from "./Buttons";

export default function Card({
  meta,
  slug,
}: {
  meta: any;
  slug: string;
}): React.ReactNode {
  return (
    <div className="rounded-lg p-4 border border-gray-400">
      <div className="flex justify-between">
        <div>
          <div className="my-2">
            <Link
              href={`${meta.type === "project" ? "/projects/" : "/thoughts/" }` + slug}
              className="text-xl font-bold hover:text-indigo-500 hover:underline"
            >
              {meta.title}
            </Link>
            <p className="text-sm text-gray-500">{meta.date}</p>
          </div>
          <p
            className={`text-sm md:text-md ${
              meta.imgSrc ? "max-w-2xl mr-4" : ""
            }`}
          >
            {meta.description}
          </p>
          <div className="mt-4 flex gap-4">
            {meta.repo && <GitHubRepoButton repo={meta.repo} />}
            {meta.visit && <Visit link={meta.visit} />}
          </div>
        </div>

        {meta.imgSrc && (
          <div className="w-50 h-50 grid place-items-center">
            <img
              className="max-w-[8rem] h-40 w-40 rounded-lg object-contain md:object-cover md:max-w-[10rem]"
              src={meta.imgSrc}
              alt="project thumbnail"
            />
          </div>
        )}
      </div>
    </div>
  );
}
