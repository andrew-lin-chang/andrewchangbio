import Card from "@/components/Card";

export interface Project {
  title: string;
  description: string;
  img: string;
  date: Date;
}

export default function Projects() {
  const data: Array<Project> = [
    {
      title: "Student Org Slack Bot",
      description:
        "A Slack Bolt app made with Javascript to create weekly event reminders using the Google Calendar API and a cron scheduler",
      img: "sdfsd",
      date: new Date(),
    },
    {
      title: "Student Org Slack Bot",
      description:
        "A Slack Bolt app made with Javascript to create weekly event reminders using the Google Calendar API and a cron scheduler",
      img: "sdfsd",
      date: new Date(),
    },
    {
      title: "Student Org Slack Bot",
      description:
        "A Slack Bolt app made with Javascript to create weekly event reminders using the Google Calendar API and a cron scheduler",
      img: "sdfsd",
      date: new Date(),
    },
  ];

  return (
    <div className="my-6">
      <h1 className="text-white font-bold text-4xl">Projects</h1>
      <p className="text-gray-500 ">Things I've made in class or in my free time :)</p>
      <div className="grid grid-cols-1 gap-4 mt-6">
        {data.map((project) => {
          return <Card {...project}/>;
        })}
      </div>
    </div>
  );
}
