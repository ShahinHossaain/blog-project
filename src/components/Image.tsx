import { IKImage } from "imagekitio-react";

interface ImageProps {
  className?: string;
  url: string;
  id?: string;
}

const Image: React.FC<ImageProps> = ({ className, url }) => {
  return (
    <IKImage
      className={className}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={url}
      alt="Image"
    />
  );
};

export default Image;
