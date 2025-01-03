import { Link } from "react-router-dom";

type linksNamesObjectType = {
  topic: string;
  data: {
    name: string;
    to: string;
  }[];
}[];

const linksNamesObject: linksNamesObjectType = [
  {
    topic: "Get to know us",
    data: [
      {
        name: "About us",
        to: "/aboutus",
      },
      {
        name: "Contact us",
        to: "/aboutus",
      },
      {
        name: "FAQ",
        to: "/aboutus",
      },
      {
        name: "Reviews",
        to: "/aboutus",
      },
      {
        name: "Safety",
        to: "/aboutus",
      },
      {
        name: "Security",
        to: "/aboutus",
      },
    ],
  },
  {
    topic: "Learn with us",
    data: [
      {
        name: "In the news",
        to: "/aboutus",
      },
      {
        name: "Find a Tutor",
        to: "/aboutus",
      },
      {
        name: "Request a Tutor",
        to: "/aboutus",
      },
      {
        name: "Online Tutoring",
        to: "/aboutus",
      },
      {
        name: "Get study help",
        to: "/aboutus",
      },
      {
        name: "Learning resourses",
        to: "/aboutus",
      },
    ],
  },
  {
    topic: "Work with us ",
    data: [
      {
        name: "Blog",
        to: "/aboutus",
      },
      {
        name: "Tell us what you think",
        to: "/aboutus",
      },
      {
        name: "Career at DoLang",
        to: "/aboutus",
      },
      {
        name: "Apply to Tutor",
        to: "/aboutus",
      },
      {
        name: "Tutor Job Board",
        to: "/aboutus",
      },
      {
        name: "Affiliates",
        to: "/aboutus",
      },
    ],
  },
];

export default function FooterBlock() {
  return linksNamesObject.map((block) => {
    return (
      <div key={block.topic} className="p-4">
        {/* Key to be changed */}
        <h5 className="p-4 border-b mb-4 border-white">{block.topic}</h5>
        <ul className="flex flex-wrap gap-4 underline sm:block sm:space-y-2 sm:no-underline">
          {block.data.map((linkName) => (
            <li key={linkName.name}>
              {/* Key to be changed */}
              <Link to={linkName.to}>{linkName.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  });
}
