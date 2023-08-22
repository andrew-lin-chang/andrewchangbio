// import resume from "/public/andrewlinchang_resume.pdf"

export default function Resume() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Resume</h1>
      <p>Feel free to download my resume!</p>
      <iframe className="w-full h-[30rem] sm:h-screen mt-4" src="https://drive.google.com/file/d/1moyqk_2vAEWsrcLEZS8py8Yo3Syc34sp/preview" allow="autoplay"></iframe>
    </div>
  );
}
