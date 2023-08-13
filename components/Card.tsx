import { Project } from "@/app/projects/page"

export default function Card({title, description, img, date}: Project): React.ReactNode {
  return (
    <div className="flex rounded-md p-4 shadow-md hover:shadow-xl">
      <div className="flex">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  )
}