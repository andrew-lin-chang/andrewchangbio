// import resume from "/public/andrewlinchang_resume.pdf"

export default function Resume() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Resume</h1>
      <p>Feel free to download my resume!</p>
      <embed
        src="andrewlinchang_resume.pdf"
        type="application/pdf"
        width="100%"
        className="min-h-screen mt-6"
      />
    </div>
  );
}
