"use client";
import Link from "next/link";
import { GitHub } from "./Icons";

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export function Popup() {
  return (
    <div className="flex rounded-full text-white bg-indigo-500 uppercase px-2 py-1 text-xs font-bold w-fit sticky top-20 mx-auto z-50">
      COPIED TO CLIPBOARD!
    </div>
  );
}

export function CopyButton({
  children,
  content,
  onClick,
}: {
  children: React.ReactNode,
  content: string;
  onClick: (content: string) => any;
}) {
  return (
    <button
      className="flex justify-center align-items gap-4 border rounded-lg p-6 grow"
      onClick={() => onClick(content)}
    >
      {children}
      {content}
    </button>
  );
}

export function GitHubRepoButton({repo}: {repo: string}) {
  return (
    <Link href={repo}>
      <div className="font-bold flex gap-2 items-center border border-gray-400 p-2 rounded-lg hover:bg-indigo-500 hover:text-white hover:fill-white">
        <GitHub />
        GitHub Repo
      </div>
    </Link>
  );
}

export function Visit({link}: {link: string}) {
  return (
    <Link href={link} className="font-bold border p-2 rounded-lg border-gray-400 hover:bg-indigo-500 hover:text-white">Visit</Link>
  )
}