// The main page for this Cat Image Web App

"use client";

import React, {useState} from "react";
import Button from "@/components/atoms/Button";


export default function HomePage() {
  const [cats, setCats] = useState([]);  // State to hold the array of cat images
  const [showCats, setShowCats] = useState(false); // State to control whether cats are displayed

    
  // Function to fetch 5 random cat images from the Cat API
     
     const fetchCats = async () => {
      try {
        setCats([]); //Clear previous images
        setShowCats(false);

        // fetch 5 random cat images from the cat API
        const response = await fetch(
           ` https://api.thecatapi.com/v1/images/search?limit=5`,
          {
            // include the api key in the header for authentication 
              headers: {
                'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY // api key stored in environment variable for security
              }
          }
        );
        // Parse the response as Json and stored the result in data
        const data = await response.json(); 

        if (data && data.length >0) {
          setCats(data); // Update the state with new images
          setShowCats(true);
        } else {
          alert("No cat images found"); // Error detection
          setShowCats(false);
        }
      } catch (error) {
        console.error("Fetch error:", error); // log the error to the console
        alert("An error occurred while fetching cat images."); // Show alert to the user
      }
     };

     // Function to clear the cat images from display

     const clearCats = () => {
         setCats([]); // clear previous images 
         setShowCats(false); // Hide display of images
     };
     

  return (
    <div className="bg-orange-50 min-h-screen p-6 flex flex-col items-center">
      {/* App Title */}
      <h1 className="text-6xl font-bold mb-4 text-purple-700">Cute Kitty Gallery</h1>
   

    {/* Buttons for fetching and clearing cat images */}
    <div className="flex space-x-4 mb-8">
       <Button label="Fetch Cats" onClick={fetchCats} /> {/* Fetches cat images */}
       <Button label="Clear Cats" onClick={clearCats} /> {/* Clears the images */}
    </div>
    </div>
  );
}