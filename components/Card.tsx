import { Project } from "@/app/projects/page"

export default function Card({title, description, img, date}: Project): React.ReactNode {
  return (
    <div className="flex border border-gray-500 rounded-md p-4">
      <div className="flex">
        <div>
          <h1 className="text-white text-lg">{title}</h1>
          <p className="text-gray-500 text-sm">{description}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
    </div>
  )
}