import ProjectSection from "./ProjectSection";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-2 lg:gap-4 w-full px-1/6 p-16 lg:px-1/4 shadow-sm rounded-lg scroll-m-10"
    >
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[34px] gap-[16px] items-stretch hover mt-8 lg:mt-0">
        <ProjectSection
          title={t("done.title")}
          content={t("done.description")}
        />
        <ProjectSection
          title={t("solar.title")}
          content={t("solar.description")}
        />
        <ProjectSection
          title="Project 3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet semper magna."
        />
        <ProjectSection
          title="Project 4"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet semper magna."
        />
        <ProjectSection
          title="Project 5"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet semper magna."
        />
        <ProjectSection
          title="Project 6"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet semper magna."
        />
      </div>
    </section>
  );
}
