import bg from "@/assets/background.png";
import { Button } from "@tremor/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section
          className="bg-cover bg-center bg-gradient-to-t from-black to-white"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="flex flex-col tablet:flex-row justify-center h-screen gap-2 lg:gap-4 w-full p-1/6 pt-36 lg:p-1/6 bg-gradient-to-t from-cyan-bg to-transparent">
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Hello, I&apos;m
            </h2>
            <h1 className="text-3xl lg:text-5xl font-bold">
              Selim Göktuğ Cankurtaran
            </h1>
            <h2 className="text-l lg:text-3xl font-semibold max text-cyan-600">
              a Software Engineer <br></br> of another kind
            </h2>
            <p className="mt-4 lg:max-w-1/3 text-sm">
              {" "}
              I&apos;m a software engineer with a passion for building scalable
              and maintainable software. I have experience in building web
              applications, APIs, and microservices. I&apos;m also interested in
              cloud computing and DevOps practices.
            </p>
            <Link href="/contact" className="w-36 h-11 rounded-full">
              <Button className="w-36 h-11 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                hire me!
              </Button>
            </Link>
          </div>
        </section>

        <section className="flex flex-col items-center w-full gap-8 p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempo.
          </p>
        </section>

        <section className="flex flex-col items-center w-full gap-8 p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempo.
          </p>
        </section>

        <section className="z-30 flex flex-col items-center w-full rounded-lg gap-32">
          <div className="flex flex-col flex-wrap items-center justify-between w-full gap-8 px-6 tablet:flex-row max-w-7xl">
            <h2 className="text-2xl font-semibold">Specialities</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempo.
            </p>
          </div>
        </section>

        <section className="mb-12 p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </section>

        <section className="mb-12 p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside mt-4">
            <li>
              Javascript - Lorem ipsum dolor sit amet, consetetur sadipscing.
            </li>
            <li>Python - Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
            <li>C# - Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
            <li>Python - Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
            <li>Python - Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
            <li>Python - Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
          </ul>
        </section>

        <section className="mb-12 p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4">Follow me on:</p>
          <ul className="list-disc list-inside mt-4"></ul>
        </section>
      </main>
      <footer className="text-center mt-12 bg-cover bg-center p-4">
        <p className="text-white">
          &copy; 2024 SELIM CANKURTARAN. All rights reserved.
        </p>
      </footer>
    </>
  );
}
