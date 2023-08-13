import { Project } from "@/app/projects/page"

export default function Card({title, description, img, date}: Project): React.ReactNode {
  return (
    <div className="flex border border-black rounded-md p-4">
      <div className="flex">
        <div>
          <h1 className="text-lg">{title}</h1>
          <p className="text-sm">{description}</p>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  )
}