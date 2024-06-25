import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Index");
  return (
      <section className="z-30 flex flex-col items-center w-full rounded-lg gap-32">
        <div className="flex flex-col flex-wrap items-center justify-between w-full gap-8 px-6 tablet:flex-row max-w-7xl">
          <h2 className="text-2xl font-semibold">Specialities</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempo.
            {t("title")}
          </p>
        </div>
      </section>
  );
}
