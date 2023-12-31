import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

// statically generate routes for posts at build time
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <article className="prose dark:prose-invert leading-none">
      <h1 className="font-bold text-4xl">{props.frontMatter.title}</h1>
      <div className="mt-6">
        <MDXRemote source={props.content} />
      </div>
    </article>
  );
}
