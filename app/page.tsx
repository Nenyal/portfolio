import bg from "@/assets/background1.png";
import js from "@/assets/javascript.svg";
import csharp from "@/assets/csharp.svg";
import python from "@/assets/python.svg";
import java from "@/assets/java.svg";
import typescript from "@/assets/typescript.svg";
import { Button } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="flex flex-col tablet:flex-row justify-center h-screen gap-2 lg:gap-4 w-full p-1/6 pt-36 lg:p-1/4">
            {" "}
            {/*bg-gradient-to-t from-cyan-bg to-transparent*/}
            <h2 className="text-xl lg:text-3xl font-semibold ">
              Hello, I&apos;m
            </h2>
            <h1 className="text-3xl lg:text-5xl font-bold">
              Selim Göktuğ Cankurtaran
            </h1>
            <h2 className="text-l lg:text-3xl font-semibold max text-cyan-600">
              a Software Engineer <br></br> of another kind
            </h2>
            <p className="mt-4 lg:max-w-1/2 text-sm">
              {" "}
              I&apos;m a software engineer with a passion for building scalable
              and maintainable software. I have experience in building web
              applications, APIs, and microservices. I&apos;m also interested in
              cloud computing and DevOps practices.
            </p>
            <div className="flex flex-row items-center justify-center w-72 gap-4 mt-8">
              <Link href="/contact" className="w-36 h-11 rounded-full">
                <Button className="w-32 h-11 text-white bg-darkblue-buttonbg hover:bg-[#032840] focus:outline-none focus:ring-2 focus:ring-blue-200 font-bold rounded-full text-base px-5 py-2.5 text-center me-2 mb-2">
                  hire me!
                </Button>
              </Link>

              <Link href="/contact" className="w-36 h-11 rounded-full">
                <Button className="w-36 h-11 text-[#053C5F] bg-white ring-2 ring-[#053C5F] hover:bg-cyan-bg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base px-5 py-2.5 text-center me-2 mb-2">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:px-1/4 px-1/7 items-center w-full lg:gap-8 p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Specialities</h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[34px] gap-[16px] items-center hover mt-8 lg:mt-0">
            <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
              <Image src={js.src} alt="Javascript" width={50} height={50} />
              <h2 className="text-lg font-bold text-[#3C3C3C]">JavaScript</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempo.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
              <Image src={csharp.src} alt="CSharp" width={50} height={50} />
              <h2 className="text-xl font-bold text-[#3C3C3C]">C#</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempo.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
              <Image src={python.src} alt="Python" width={50} height={50} />
              <h2 className="text-xl font-bold text-[#3C3C3C]">Python</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempo.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
              <Image src={java.src} alt="Java" width={50} height={50} />
              <h2 className="text-xl font-bold text-[#3C3C3C]">Java</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempo.
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
              <Image
                src={typescript.src}
                alt="TypeScript"
                width={50}
                height={50}
              />
              <h2 className="text-xl font-bold text-[#3C3C3C]">TypeScript</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempo.
              </p>
            </div>
          </div>
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
          &copy; 2024 SELIM GOKTUG CANKURTARAN. All rights reserved.
        </p>
      </footer>
    </>
  );
}
