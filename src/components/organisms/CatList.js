// organism showing the cat list

import React from "react";
import CatDetails from "../molecules/CatDetails";

export default function CatList({ cats }) {
    return(
      <div className="cat-list">
        {cats.map(cat => (
            <CatDetails
              key={cat.id}
              url={cat.url}
              width={cat.width}
              height={cat.height}
            /> // Iterate over cats array and render a cat info details for each cat
        ))}
      </div>
    );
}