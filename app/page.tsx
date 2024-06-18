export default function Home() {
  return (
    <>
      <main>
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
