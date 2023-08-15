import { GitHub, LinkedIn } from "./Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mb-4">
      <div className="flex justify-center gap-4 my-4">
        <Link href="https://github.com/andrew-lin-chang">
          <GitHub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrewlinchang/"
          target="_blank"
        >
          <LinkedIn />
        </Link>
      </div>
      <p className="text-xs text-center">
        Andrew Chang • {new Date().getFullYear()} • Andrew Chang Bio
      </p>
    </div>
  );
}
