import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import fondo from "../images/fondo.jpg"; // Asegúrate que esta imagen se importe correctamente

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${fondo})`, // ✅ solución aquí
        }}
      >
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-transparent p-6 rounded-lg">
          <div className="inline-block max-w-lg text-center justify-center bg-transparent">
            <span className={title({ color: "yellow", size: "lg" })}>
              Website&nbsp;
            </span>
            <br />
          </div>

          <div className="flex gap-3 ">
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>
        </section>

        
      </div>
    </DefaultLayout>
  );
}
