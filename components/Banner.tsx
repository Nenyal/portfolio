import { Button } from "@tremor/react";
import Link from "next/link";
import bg from "@/assets/background.png";
import { useTranslations } from "next-intl";

export default function Banner() {
  const t = useTranslations("Banner");
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex flex-col tablet:flex-row justify-center h-screen gap-2 lg:gap-4 w-full p-1/6 pt-36 lg:p-1/4">
        <h2 className="text-xl lg:text-3xl font-semibold ">{t("upperText")}</h2>
        <h1 className="text-3xl lg:text-5xl font-bold">
          Selim Göktuğ Cankurtaran
        </h1>
        <h2 className="text-l lg:text-3xl font-semibold max text-cyan-600">
          {t("title")} <br></br> {t("lowerTitle")}
        </h2>
        <p className="mt-4 lg:max-w-1/3 text-sm">
          {t("description")}
        </p>
        <div className="flex flex-row items-center justify-center w-72 gap-4 mt-8">
          <Link href="/contact" className="w-36 h-11 rounded-full">
            <Button className="w-32 h-11 text-white bg-darkblue-buttonbg hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-blue-200 font-bold rounded-full text-base px-5 py-2.5 text-center me-2 mb-2">
              {t("contact")}
            </Button>
          </Link>

          <Link href="/contact" className="w-36 h-11 rounded-full">
            <Button className="w-36 h-11 text-[#053C5F] bg-white ring-2 ring-[#053C5F] hover:bg-cyan-bg focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base px-5 py-2.5 text-center me-2 mb-2">
              {t("more")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
