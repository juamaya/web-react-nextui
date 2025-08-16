import DefaultLayout from "@/layouts/default";
import { GalleryIcon, MusicIcon, VideoIcon } from "@/components/iconsTabs";
import { Tabs, Tab} from "@heroui/react"; // o @heroui/react
import Card from "@/components/card";
import car from "../images/car.png";
import car1 from "../images/car1.png";
import car2 from "../images/car2.png";


export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4  md:py-10">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" color="primary" variant="bordered">
            {/* ###################### Seccion fotos #######################*/}
            <Tab
              key="photos"
              title={
                <div className="flex items-center space-x-2">
                  <GalleryIcon />
                  <span>Photos</span>
                </div>
              }
            >
              <section className=" grid grid-cols-1 gap-4  m-5 md:grid md:grid-cols-3">
                <Card
                  numero={1}
                  titulo="titulo de la card"
                  body="Body de la card"
                  description="description de  card"
                  footer="Footer de la card"
                  src={car}
                />

                <Card
                  numero={2}
                  titulo="titulo de la card"
                  body="Body de la card"
                  description="description de  card"
                  footer="Footer de la card"
                  src={car1}
                />

                <Card
                  numero={3}
                  titulo="titulo de la card"
                  body="Body de la card"
                  description="description de  card"
                  footer="Footer de la card"
                  src={car2}
                />

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </section>
            </Tab>
            {/* ###################### Seccion musica #######################*/}
            <Tab
              key="music"
              title={
                <div className="flex items-center space-x-2">
                  <MusicIcon />
                  <span>Music</span>
                </div>
              }
            >
              <section className=" grid grid-cols-1 gap-4  m-5 md:grid md:grid-cols-3">
                <Card
                  numero={1}
                  titulo="titulo de la card"
                  body="Body de la card"
                  description="description de  card"
                  footer="Footer de la card"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                />

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </section>
            </Tab>
            {/* ###################### Seccion videos #######################*/}
            <Tab
              key="videos"
              title={
                <div className="flex items-center space-x-2">
                  <VideoIcon />
                  <span>Videos</span>
                </div>
              }
            >
              <section className="  grid grid-cols-1 gap-4  m-5 md:grid md:grid-cols-3">
                <Card
                  numero={1}
                  titulo="titulo de la card"
                  body="Body de la card"
                  description="description de  card"
                  footer="Footer de la card"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </section>
            </Tab>
          </Tabs>
        </div>
      </section>
    </DefaultLayout>
  );
}
