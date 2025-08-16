 
import DefaultLayout from "@/layouts/default";
import { Link, User } from "@heroui/react";
import { title } from "@/components/primitives";

import CardImage from "@/components/CardImage";

import appImg from "../images/app-repo.png"
import appImg1 from "../images/navbar-juan.png";
import appImg2 from "../images/portafolio-juan.png";
import appImg3 from "../images/app.png";
import appImg4 from "../images/next-container.png";
import appImg5 from "../images/useCallback.png";
import appImg8 from "../images/webdocu.png";
import appImg6 from "../images/morty.png";
import appImg7 from "../images/pokemon-app.png";

 


import juan from "../images/juan.jpg";

export default function DocsPage() {
  const nombre = "Juamaya";
  const foto = juan  // ✅ Ruta correcta desde public/

  return (
    <DefaultLayout>
      {/* Usuarios */}
      <span className={title({ color: "yellow", size: "sm" })}>
        Mis Proyectos&nbsp;
      </span>
      <br />
      <section className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 p-4">
        <User
          avatarProps={{
            src: foto,
          }}
          description={
            <Link
              isExternal
              href="https://juamaya.github.io/web-repositorios"
              size="lg"
            >
              Web repositorios ✈
            </Link>
          }
          name={nombre}
        />
        <User
          avatarProps={{
            src: foto,
          }}
          description={
            <Link isExternal href="https://juamaya.github.io/webdocu" size="lg">
              Web documentos ✈
            </Link>
          }
          name={nombre}
        />
        <User
          avatarProps={{
            src: foto,
          }}
          description={
            <Link
              isExternal
              href="https://juamaya.github.io/clon-web-astro-avanzado/"
              size="lg"
            >
              Web astro-avanzado ✈
            </Link>
          }
          name={nombre}
        />
        <User
          avatarProps={{
            src: foto,
          }}
          description={
            <Link
              isExternal
              href="https://juamaya.github.io/astro-web"
              size="lg"
            >
              Web astro ✈
            </Link>
          }
          name={nombre}
        />
      </section>

      {/* Imágenes */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 p-4">
        <CardImage src={appImg} />
        <CardImage src={appImg1} />
        <CardImage src={appImg2} />
        <CardImage src={appImg3} />
        <CardImage src={appImg4} />
        <CardImage src={appImg5} />
        <CardImage src={appImg6} />
        <CardImage src={appImg7} />
        <CardImage src={appImg8} />
      </section>
    </DefaultLayout>
  );
}
