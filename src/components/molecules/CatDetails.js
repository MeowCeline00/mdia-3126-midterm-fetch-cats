// a molecule to show cat images and cat info

import React from "react";
import CatImage from "../atoms/CatImage";

export default function CatDetails({ url, width, height, breeds }) {
    return (
        <div>
            <CatImage src={url} alt="Cat" />
            <p className="mt-2 text-gray-700">Width: {width}</p>
            <p className="mt-2 text-gray-700">height: {height}</p>
            <p className="text-gray-700">breed: {breeds}</p>
        </div>
    );
}