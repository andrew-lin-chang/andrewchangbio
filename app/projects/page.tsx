import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import Card from "@/components/Card";

export interface Project {
  title: string;
  description: string;
  imgSrc: string;
  date: string;
  repo?: string;
  visit?: string;
}

export default function Projects() {
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

  const projects = posts.filter((post) => post.meta.type === "project");

  return (
    <div>
      <h1 className="font-bold text-4xl">Projects</h1>
      <p className="">Things I&apos;ve made in class or in my free time :)</p>
      <div className="grid grid-cols-1 gap-4 mt-6">
        {projects.map((project) => {
          return (
            <Card meta={project.meta} slug={project.slug} key={project.slug} />
          );
        })}
      </div>
    </div>
  );
}
