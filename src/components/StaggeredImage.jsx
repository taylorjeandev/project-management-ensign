import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import { Image, Box } from "@chakra-ui/react";

const StaggeredImage = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <section className="image-section">
      <Image
        boxSize="100px"
        objectFit="cover"
        className="grid-images"
        src={images[0]}
      />
      <Image
        boxSize="100px"
        objectFit="cover"
        className="grid-images"
        src={images[1]}
      />
      <Image
        boxSize="100px"
        objectFit="cover"
        className="grid-images"
        src={images[2]}
      />
      <Image
        boxSize="100px"
        objectFit="cover"
        className="grid-images"
        src={images[3]}
      />
      <Image
        boxSize="100px"
        objectFit="cover"
        className="grid-images"
        src={images[4]}
      />
      <Image
        boxSize="100px"
        objectFit="cover"
        className="grid-images"
        src={images[5]}
      />
    </section>
  );
};

export default StaggeredImage;
