import { Image } from "@heroui/react";

type CardImageProps = {
  src?: string;
};

const CardImage = ({ src }: CardImageProps) => {
  return (
    <div className="w-full aspect-[4/3] overflow-hidden">
      <Image
        isZoomed
        alt="HeroUI Fruit Image with Zoom"
        src={src}
        className="w-full h-full object-cover transition-transform duration-800 ease-in-out border-2 border-amber-300"
      />
    </div>
  );
};

export default CardImage;
