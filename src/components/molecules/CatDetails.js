// a molecule to show cat images and cat info

import React from "react";
import CatImage from "../atoms/CatImage";

export default function CatDetails({ url, id, temperament, height }) {
    return (
        <div>
            <CatImage src={url} alt="Cat" />
            <p className="mt-2 text-gray-700">id: {id}</p>
            <p className="text-gray-700">temperament: {temperament}</p>
            <p className="text-gray-700">height: {height}</p>
        </div>
    );
}