"use client";
import Link from "next/link";
import { GitHub } from "./Icons";

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function Popup() {
  return (
    <div className="flex rounded-full text-white bg-indigo-500 uppercase px-2 py-1 text-xs font-bold w-fit sticky top-20 mx-auto">
      COPIED TO CLIPBOARD!
    </div>
  );
}

export function CopyButton({
  content,
  onClick,
}: {
  content: string;
  onClick: (content: string) => any;
}) {
  return (
    <button
      className="border rounded-lg p-6 grow"
      onClick={() => onClick(content)}
    >
      {content}
    </button>
  );
}

export function GitHubRepoButton({repo}: {repo: string}) {
  return (
    <Link href={repo}>
      <div className="font-bold flex gap-2 items-center border p-2 rounded-lg hover:bg-indigo-500 hover:text-white hover:fill-white">
        <GitHub />
        GitHub Repo
      </div>
    </Link>
  );
}

export function Visit({link}: {link: string}) {
  return (
    <Link href={link} className="font-bold border p-2 rounded-lg hover:bg-indigo-500 hover:text-white">Visit</Link>
  )
}