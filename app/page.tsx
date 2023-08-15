"use client";

import Image from "next/image";
import Link from "next/link";
import wetcat from "public/images/wetcat.png";
import babychang from "public/images/babychang.jpg";
import TechStack from "@/components/TechStack";
import { Gmail, LinkedIn, Phone } from "@/components/Icons";
import Timeline from "@/components/Timeline";
import { CopyButton, Popup } from "@/components/Buttons";
import { useState, useEffect } from "react";

export default function Home() {
  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    if (popupVisible) {
      const popupTimeout = setTimeout(() => {
        hidePopup();
      }, 2000);

      return () => {
        clearTimeout(popupTimeout);
      };
    }
  }, [popupVisible]);

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    showPopup();
  };

  return (
    <main>
      {popupVisible && <Popup />}

      <div className="flex-col-reverse flex justify-between items-center text-center md:flex-row md:text-left my-6">
        <div className="mt-4">
          <h2 className="text-sm md:text-lg">Nice to meet you!</h2>
          <h1 className="font-bold text-3xl tracking-tighter md:text-6xl my-2 text-indigo-500">
            Andrew Chang
          </h1>
          <p>Electrical and Computer Engineering Student</p>
          <p>University of Texas at Austin</p>
        </div>
        <Image
          className="rounded-full aspect-square object-cover"
          src={babychang}
          height={300}
          width={300}
          alt="profile picture"
        />
      </div>

      <TechStack />

      <div className="mt-8 flex flex-col gap-8">
        <section>
          <h1 className="font-bold text-3xl mb-4">About</h1>
          <p>
            I&apos;m an Electrical and Computer Engineering student at the University
            of Texas at Austin. I&apos;m particularly interested in full-stack
            development, automation, IoT, AI, and the cloud. You can probably
            find me in the quiet section of the library trying to learn
            something new!
          </p>
        </section>

        <section>
          <h1 className="font-bold text-3xl mb-4">Experience</h1>
          <Timeline />
        </section>

        <section>
          <h1 className="font-bold text-3xl mb-4">Contact Me</h1>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <CopyButton
              content="andrewchang@utexas.edu"
              onClick={copyToClipboard}
            >
              <Gmail />
            </CopyButton>
            <CopyButton content="(713) 259-3492" onClick={copyToClipboard}>
              <Phone />
            </CopyButton>
            <Link
              href="https://www.linkedin.com/in/andrewlinchang/"
              className="border rounded-lg p-6 dark:fill-white flex gap-4 justify-center grow"
            >
              <LinkedIn />
              <span>in/andrewlinchang</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
