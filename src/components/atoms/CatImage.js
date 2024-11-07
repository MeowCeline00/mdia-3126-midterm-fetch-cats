// Create a image source atom to load pictures

import React from "react";

export default function CatImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt || "Cat image"}
      className="w-60 h-60 rounded-lg border-4 
           border-yellow-400 shadow-md object-cover"
    />
  );
}
