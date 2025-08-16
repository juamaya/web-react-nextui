import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Avatar } from "@heroui/avatar";

import juan from "../images/juan.jpg"

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          <Avatar
          className="mt-5 "
            size="lg"
            isBordered
            color="warning"
            src={juan}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
