import bg from "@/assets/background.png";

export default function Home() {
  return (
    <>
      <main>
        <section
          className="bg-cover bg-center p-8"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <div className="flex flex-col justify-center h-screen gap-4 ml-1/4">
            <h2 className="text-3xl font-semibold">Hello, I&apos;m</h2>
            <h1 className="text-5xl font-bold">Selim Göktuğ Cankurtaran</h1>
            <h2 className="text-3xl font-semibold text-cyan-600">
              a Software Engineer <br></br> of another kind
            </h2>
            <p className="mt-4 max-w-1/3">
              {" "}
              I&apos;m a software engineer with a passion for building scalable
              and maintainable software. I have experience in building web
              applications, APIs, and microservices. I&apos;m also interested in
              cloud computing and DevOps practices.
            </p>
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
