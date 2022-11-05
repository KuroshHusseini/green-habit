import React from "react";
import Image from "next/image";

/*const myLoader = ({ src, width, quality }) => {
  return `localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};*/

export const DetailsPage = ({ src, header, summary, description }) => {
  return (
    <div>
      {src && (
        <Image
          //loader={myLoader}
          src={src}
          alt={alt}
          width={500}
          height={500}
        ></Image>
      )}
      <h1>{header}</h1>
      <div>{summary}</div>
      <div>{description}</div>
    </div>
  );
};
