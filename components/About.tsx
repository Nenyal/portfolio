import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center gap-2 lg:gap-4 w-full px-1/6 p-16 lg:px-1/4 shadow-sm rounded-lg scroll-m-10"
    >
      <h2 className="text-2xl font-semibold">{t("title")}</h2>
      <p className="mt-8">{t("description")}</p>
    </section>
  );
}
