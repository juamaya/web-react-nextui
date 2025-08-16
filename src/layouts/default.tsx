import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Navbar />
      <main className="w-full flex-grow pt-1">{children}</main>

      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">juamaya 🚀 2025 </span>
          <p className="text-primary"> HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}
