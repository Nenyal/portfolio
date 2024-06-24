export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-2 lg:gap-4 w-full px-1/6 p-16 lg:px-1/4 shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-8">Follow me on:</p>
      <ul className="flex gap-4 mt-4">
        <li>
          <a
            href="
          https://www.linkedin.com/in/selim-goktug-cankurtaran/"
            className="text-blue-500"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="
          https://www.github.com/selimcankurtaran"
            className="text-black"
          >
            
            GitHub
          </a>
        </li>
      </ul>
      <p className="mt-8">Or send me an email:</p>
      <a href="mailto:selimcankurtaran@hotmail.com" className="text-black">
        selimcankurtaran@hotmail.com
      </a>
      <ul className="list-disc list-inside mt-4"></ul>
    </section>
  );
}
