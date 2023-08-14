import { GitHub, LinkedIn, Gmail } from "./Icons";

export default function Footer() {
  return (
    <div className="mb-4">
      <div className="flex justify-center gap-4 my-2">
        <button>
          <Gmail />
        </button>
        <a href="">
          <GitHub />
        </a>
        <a href="">
          <LinkedIn />
        </a>
      </div>
      <p className="text-xs text-center">Andrew Chang • {new Date().getFullYear()} • Andrew Chang Bio</p>
    </div>
  );
}
