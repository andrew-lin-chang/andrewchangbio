import { Project } from "@/app/projects/page"
import Image from "next/image"

export default function Card({title, description, imgSrc, date}: Project): React.ReactNode {
  return (
    <div className="flex rounded-md p-4 shadow-md hover:shadow-xl">
      <div className="flex gap-2">
        <div>
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
          <p className="text-sm">{date}</p>
        </div>
        <Image className="rounded-lg sm:h-44 sm:w-52" src={imgSrc} height={100} width={100} alt="project thumbnail"/>
      </div>
    </div>
  )
}