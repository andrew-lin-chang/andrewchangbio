import {
  JS,
  TS,
  Python,
  Java,
  CPP,
  React,
  Node,
  Next,
  Tailwind,
  Express,
  Git,
  Mongo,
  Raspberry,
  Firebase,
  Arduino,
  AWS,
  Docker,
  Pytorch,
  OpenAI,
  NPM
} from "./Icons";

export default function TechStack() {
  return (
    <>
      <h1 className="font-bold mt-2 text-xl">Languages</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        <a href="https://www.javascript.com/">
          <JS />
        </a>

        <a href="https://www.typescriptlang.org/">
          <TS />
        </a>

        <a href="https://www.python.org/">
          <Python />
        </a>

        <a href="https://www.java.com/">
          <Java />
        </a>

        <a href="https://cplusplus.com/">
          <CPP />
        </a>
      </div>

      <h1 className="font-bold mt-4 text-xl">Technologies</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        <a href="https://react.dev/">
          <React />
        </a>

        <a href="https://nodejs.org/">
          <Node />
        </a>

        <a href="https://nextjs.org/">
          <Next />
        </a>

        <a href="https://expressjs.com/">
          <Express />
        </a>

        <a href="https://npm.com/">
          <NPM />
        </a>

        <a href="https://tailwindcss.com/">
          <Tailwind />
        </a>

        <a href="https://git-scm.com/">
          <Git />
        </a>

        <a href="https://www.mongodb.com/">
          <Mongo />
        </a>

        <a href="https://www.raspberrypi.com/">
          <Raspberry />
        </a>

        <a href="https://firebase.google.com/">
          <Firebase />
        </a>

        <a href="https://www.arduino.cc/">
          <Arduino />
        </a>
      </div>

      <h1 className="font-bold text-xl mt-4">
        What I'm learning/want to learn
      </h1>
      <div className="flex flex-wrap gap-2 mt-2">
        <a href="https://openai.com/">
          <OpenAI />
        </a>
        <a href="https://pytorch.org/">
          <Pytorch />
        </a>
        <a href="https://www.docker.com/">
          <Docker />
        </a>
        <a href="https://aws.amazon.com/">
          <AWS />
        </a>
      </div>
    </>
  );
}
