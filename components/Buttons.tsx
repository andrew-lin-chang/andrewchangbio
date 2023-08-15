"use client";

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
    <button className="border rounded-lg p-6 grow" onClick={() => onClick(content)}>
      {content}
    </button>
  );
}
