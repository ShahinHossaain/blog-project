import { toast } from "react-toastify";
import axios, { AxiosError, AxiosResponse } from "axios";
import { AxiosProgressEvent } from "axios";
import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";

const Upload: React.FC = ({ children, type, setProgress, setData }) => {
  const ref = useRef(null);
  const onError = (err: AxiosError) => {
    console.log(err);
    toast.error("Image upload failed!");
  };

  const onSuccess = (res: AxiosResponse) => {
    console.log(res);
    setData(res);
  };

  const onUploadProgress = (progress: AxiosProgressEvent) => {
    if (progress.total) {
      setProgress(Math.round((progress.loaded / progress.total) * 100));
    }
    console.log(progress);
  };

  const authenticator = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/post/upload-auth`
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Authentication request failed: ${error.message}`);
      } else {
        throw new Error("Authentication request failed: Unknown error");
      }
    }
  };

  return (
    <IKContext
      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
