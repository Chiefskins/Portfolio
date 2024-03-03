import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPrisma, SiTailwindcss } from "react-icons/si";

const myStack = [
  {
    label: "Next JS - React Framework",
  },
  {
    label: "React - Javascript Framework",
  },
  {
    label: "TailwindCSS - Styling",
  },
  {
    label: "Prisma - Database ORM",
  },
  {
    label: "MongoDB - Preffered Database",
  },
];

const MyStack = () => {
  return (
    <div className='flex flex-col gap-3 py-7'>
      <h1>My Stack:</h1>
      <ol type="1">
        {myStack.map((technology, index) => (
          <li key={technology.label} className='flex gap-2 items-center'>
            {index + 1}. {technology.label}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyStack;
