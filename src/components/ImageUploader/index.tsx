import React, { useRef, useState } from "react";

interface Props {
  handleImage: (file: File) => void;
}

const ImageUploader = ({ handleImage }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<File>();

  const handleImageClick = () => {
    inputRef.current!.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files![0]);
    handleImage(e.target.files![0]);
  };

  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
      onClick={handleImageClick}
    >
      {image ? (
        <img
          alt=""
          style={{
            height: "70px",
            width: "70px",
            border: "2px solid #164e63",
            borderRadius: "100%",
            objectFit: "cover",
            padding: "2px",
          }}
          src={URL.createObjectURL(image)}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              height: "50px",
              border: "2px solid #164e63",
              borderRadius: "100%",
              padding: "10px",
            }}
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt=""
          />
          <p style={{ fontSize: "15px", color: "#94a3b8" }}>Click to upload</p>
        </div>
      )}
      <input
        onChange={handleImageChange}
        style={{ display: "none" }}
        type="file"
        ref={inputRef}
        name=""
      />
    </div>
  );
};

export default ImageUploader;
