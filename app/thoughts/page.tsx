import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Card from "@/components/Card";

export default function Thoughts() {
  // find all files in posts directory
  const postsDir = "posts";
  const files = fs.readdirSync(path.join(postsDir));

  // for each post found
  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);

    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  const thoughts = posts.filter((post) => post.meta.type === "blog");
  
  return (
    <>
      <h1 className="text-4xl font-bold">Thoughts</h1>
      <p>You&apos;ll find my blog posts here</p>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {thoughts.map((thought) => {
          return (
            <Card meta={thought.meta} slug={thought.slug} key={thought.slug} />
          );
        })}
      </div>
    </>
  );
}
