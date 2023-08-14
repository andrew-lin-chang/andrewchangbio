import Image from "next/image";
import wetcat from "public/images/wetcat.png";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main>
      <div className="flex-col-reverse flex justify-between items-center text-center md:flex-row md:text-left my-6">
        <div className="mt-4">
          <h2 className="text-sm md:text-lg">Nice to meet you!</h2>
          <h1 className="font-bold text-3xl tracking-tighter md:text-6xl my-2">
            Andrew Chang
          </h1>
          <p>Electrical and Computer Engineering Student</p>
          <p>University of Texas at Austin</p>
        </div>
        <Image
          className="rounded-full h-60 w-60"
          src={wetcat}
          height={100}
          width={100}
          alt="profile picture"
        />
      </div>

      <TechStack/>

      <div className="my-6">
        <h1 className="font-bold text-3xl">Who?</h1>
        <p className="mt-2">
          I'm an Electrical and Computer Engineering student at the University
          of Texas at Austin. I'm particularly interested in full-stack
          development, automation, IoT, and the cloud. You can probably find me
          in the quiet section of the library trying to learn something new!
        </p>
      </div>
    </main>
  );
}
