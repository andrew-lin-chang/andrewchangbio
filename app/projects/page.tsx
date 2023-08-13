import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import Card from "@/components/Card";

export interface Project {
  title: string;
  description: string;
  img: string;
  date: string;
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

  const projects = posts.filter(post => post.meta.type === "project")

  return (
    <div className="my-6">
      <h1 className="text-white font-bold text-4xl">Projects</h1>
      <p className="text-gray-500 ">
        Things I've made in class or in my free time :)
      </p>
      <div className="grid grid-cols-1 gap-4 mt-6">
        {projects.map(project => (
          <Link href={'/projects/' + project.slug} key={project.slug}>
            <Card title={project.meta.title} description={project.meta.description} img={project.meta.img} date={project.meta.date}/>
          </Link>
        ))}
      </div>
    </div>
  );
}
