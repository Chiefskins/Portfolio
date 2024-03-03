import MyStack from "@/components/my-stack";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { DiGithub } from "react-icons/di";

export default function Home() {
  return (
    <div className='w-full px-2 md:w-3/5 mx-auto py-7'>
      <ThemeToggle />
      <h1 className='my-7'>Lachlan Skinner</h1>
      <p>
        Hello, I am a 14 year old fullstack web developer located in Sydney,
        Australia. I create functional and complex applications with beautiful
        UI/UX.
      </p>
      <div className='grid grid-cols-3 divide-x'>
        <div className='mt-8 px-3'>
          <MyStack />
        </div>
        <div className='mt-16 px-3'>
          <h1>Projects coming soon ...</h1>
        </div>
        <div className='mt-16 space-y-3 px-3'>
          <h1>Contact:</h1>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <CiMail size={24} className='' />
              <a
                href='mailto:john@example.com'
                className={buttonVariants({ variant: "link" })} target="_blank">
                lachlanskinner93@gmail.com
              </a>
            </div>
            <div className='flex items-center'>
              <BsGithub size={24} className='' />
              <Link
                href={"https://github.com/Chiefskins"}
                target='_blank'
                className={buttonVariants({ variant: "link" })}>
                @Chiefskins
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
