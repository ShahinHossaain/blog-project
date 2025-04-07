import { IKImage } from "imagekitio-react";

interface ImageProps {
  className?: string;
  url: string;
  w?: string;
  h?: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ url, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={url}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
