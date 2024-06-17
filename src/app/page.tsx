import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      {/* <section className="mb-12 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Specialties</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempo.
        </p>
      </section>

      <section className="mb-12 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </section>

      <section className="mb-12 p-8 bg-white shadow-md rounded-lg">
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

      <section className="mb-12 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">Follow me on:</p>
        <ul className="list-disc list-inside mt-4">
        </ul>
      </section> */}

      <footer
        className="text-center mt-12 bg-cover bg-center p-4"
        style={{ backgroundImage: "url('/assets/logo.svg')" }}
      >
        <p className="text-white">
          &copy; 2024 SELIM CANKURTARAN. All rights reserved.
        </p>
      </footer>
    </>
  );
}
