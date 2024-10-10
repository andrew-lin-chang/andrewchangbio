// import resume from "/public/andrewlinchang_resume.pdf"

export default function Resume() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Resume</h1>
      <p>Feel free to download my resume!</p>
      <iframe
        className="w-full h-[30rem] sm:h-screen mt-4"
        src="https://drive.google.com/file/d/12i3id63N-V9KPShrtj7u6XelcLfmDI61/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
