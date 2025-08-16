 
import { Link } from "@heroui/link";
 
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { useLocation } from "react-router-dom"; // ✅ Importamos hook de rutas

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon  } from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const location = useLocation(); // ✅ Ruta actual

  

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Logo y links desktop */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <p className="font-bold text-3xl  text-amber-400">Juamaya 🚀</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = location.pathname === item.href; // ✅ Activo si coincide
            return (
              <NavbarItem key={item.href} isActive={isActive}>
                <Link
                  className={clsx(
                    linkStyles({ color: "warning" }),
                    isActive && "text-primary font-medium" // ✅ Estilos activos
                  )}
                  color="foreground"
                  href={item.href}
                  data-active={isActive} // para CSS condicional
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </div>
      </NavbarContent>

      {/* Contenido derecho desktop */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Logo />
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500 " />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* Botón menu mobile */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menú móvil */}
      <NavbarMenu>
       
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => {
            const isActive = location.pathname === item.href; // ✅ Activo en menú móvil
            return (
              <NavbarMenuItem key={`${item.href}-${index}`} isActive={isActive}>
                <Link
                  className={clsx(
                    linkStyles({ color: "warning" }),
                    isActive && "text-primary font-medium" // ✅ Estilos activos
                  )}
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
