import React from "react";

export default function ImgCard({ picture, typeOfFile, data, setData }) {
  const deletePicture = () => {
    if (typeOfFile === "file") {
      fetch("http://localhost:3000/api/product/singlePicture", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          typeOfFile: typeOfFile,
          pictureKey: [picture],
          dataId: data._id,
        }),
        credentials: "include",
      })
        .then(() => {
          const newFiles = data.file.filter((url) => {
            return url !== picture;
          });
          setData({ ...data, file: newFiles });
        })
        .catch((error) => {
          console.log(error);
        });

      const newFiles = data.file.filter((url) => {
        return url !== picture;
      });
      setData({ ...data, file: newFiles });
    }
    if (typeOfFile === "mainFile") {
      fetch("http://localhost:3000/api/product/singlePicture", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          typeOfFile: typeOfFile,
          pictureKey: picture,
          dataId: data._id,
        }),
        credentials: "include",
      })
        .then(() => {
          setData({ ...data, mainFile: [] });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="pictureWrapper">
      <img
        className="picture"
        src={`https://lithosphere83-bucket.s3.eu-west-3.amazonaws.com/upload/${picture}`}
        alt=""
      />
      <div
        className="pictureDelete"
        onClick={() => {
          deletePicture();
        }}
      >
        <div className="cross">
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}
