export default async function ProjectDetail() {
  console.log(`${process.env.API_URL_V1}/projects?project-url=${"detail[0]"}`);

  // const project = await fetch(`/projects?url=${detail[0]}`).then(
  //   async (res) => {
  //     if (res.ok) {
  //       return res.json();
  //     } else {
  //       notFound();
  //     }
  //   }
  // );

  return (
    <section className="z-30 flex flex-col items-center w-full rounded-lg gap-32 pt-36">
      <div className="flex flex-col flex-wrap items-center justify-between w-full gap-8 px-6 tablet:flex-row max-w-7xl">
        <h2 className="text-2xl font-semibold">{"project.title"}</h2>
        <p className="mt-4">{"project.description"}</p>
      </div>
    </section>
  );
}
