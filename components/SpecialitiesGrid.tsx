import Image from "next/image";
import js from "@/assets/javascript.svg";
import csharp from "@/assets/csharp.svg";
import python from "@/assets/python.svg";
import java from "@/assets/java.svg";
import typescript from "@/assets/typescript.svg";

export default function SpecialitiesGrid() {
  return (
    <section id="specialities" className="flex flex-col lg:px-1/4 px-1/7 items-center w-full lg:gap-8 p-16 shadow-sm rounded-lg scroll-m-10">
      <h2 className="text-2xl font-semibold">Specialities</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[34px] gap-[16px] items-center hover mt-8 lg:mt-0">
        <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
          <Image src={csharp.src} alt="CSharp" width={50} height={50} />
          <h2 className="text-xl font-bold text-[#3C3C3C]">C#</h2>
          <p className="mt-4">
            Development of web applications, APIs, and microservices with
            ASP.NET Core and Entity Framework Core.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
          <Image src={typescript.src} alt="TypeScript" width={50} height={50} />
          <h2 className="text-xl font-bold text-[#3C3C3C]">TypeScript</h2>
          <p className="mt-4">
            Development, CI/CD, and deployment of web applications using Next.js
            and Node.js.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
          <Image src={js.src} alt="Javascript" width={50} height={50} />
          <h2 className="text-lg font-bold text-[#3C3C3C]">JavaScript</h2>
          <p className="mt-4">
            Development, CI/CD, and deployment of web applications using Next.js
            and Node.js.
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
          <Image src={python.src} alt="Python" width={50} height={50} />
          <h2 className="text-xl font-bold text-[#3C3C3C]">Python</h2>
          <p className="mt-4">Artificial intelligence, machine learning, and data analysis</p>
        </div>

        <div className="flex flex-col items-center text-center gap-2 lg:px-4 py-6 border-2 rounded-lg border-gray-50 transform transition duration-300 hover:scale-105">
          <Image src={java.src} alt="Java" width={50} height={50} />
          <h2 className="text-xl font-bold text-[#3C3C3C]">Java</h2>
          <p className="mt-4">Basic knowledge of Java programming language and Spring Boot</p>
        </div>
      </div>
    </section>
  );
}
