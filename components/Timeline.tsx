const entries = [
  {
    date: "Fall 2024",
    position: "AMD",
    summary:
      "Systems Design Co-op/Intern",
  },
  {
    date: "Summer 2024",
    position: "Hewlett Packard Enterprise",
    summary:
      "High-Performance Compute and AI Firmware Engineering Intern",
  },
  {
    date: "Fall 2023",
    position: "IEEE UT President",
    summary:
      "Served as the president of the UT Austin Institute of Electronics and Electrical Engineers student branch. Organized professional, academic, and social development opportunities for 300+ UT ECE students.",
  },
  {
    date: "July 2023",
    position: "AWS Certified Cloud Practitioner",
    summary:
      "Received AWS certification and demonstrated understanding of AWS Cloud, services, and terminology. Began experimenting and using AWS services by deploying my own projects to the cloud.",
  },
  {
    date: "Summer 2023",
    position: "The Odin Project",
    summary:
      "Enrolled in a self-paced curriculum to learn full-stack development. Created many exercises and projects using web development technologies such as React, Express.js, Mongoose, Node.js.",
  },
  {
    date: "Summer 2023",
    position: "CodePath TIP Course",
    summary:
      "Completed CodePath's 10 week Technical Interview Prep Course. Attended weekly lessons to practice technical interview questions and formed connections with fellow students and industry professionals. Received an invitation to CodePath Emerging Engineers Summit 2023.",
  },
  {
    date: "Fall 2022",
    position: "Ramshorn Scholars Program Mentor",
    summary:
      "Mentored first-generation college students from underrepresented and marginalized backgrounds. Led makerspace workshops, provided academic tutoring, and created an inclusive community for freshman engineering students.",
  },
  {
    date: "Spring 2022",
    position: "Texas Convergent",
    summary:
      "Participated in a semester-long tech hackathon. Prototyped an IoT device and React Native app to share RFID keys between student apartments. Awarded 1st place out of 150+ competitors and recognized by Austin tech entrepreneurs.",
  },
];

function TimelineEntry({
  date,
  position,
  summary,
}: {
  date: string;
  position: string;
  summary: string;
}) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
      <time className="mb-1 text-sm font-normal leading-none text-indigo-500">
        {date}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {position}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {summary}
      </p>
    </li>
  );
}

export default function Timeline() {
  return (
    <ol className="relative border-l border-indigo-300 dark:border-indigo-900 [&>*:first-child>div:first-child]:animate-ping">
      {entries.map((entry) => (
        <TimelineEntry key={entry.position} {...entry} />
      ))}
    </ol>
  );
}
