import { useState, useEffect } from "react";

const ToristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/touristSpots")
      .then((res) => res.json())
      .then((data) => {
        setTouristSpots(data);
      })
      .catch((error) => {
        console.error("Error fetching tourist spots:", error);
      });
  }, []);

  return (
    <>
    <div>
       <h1 className="text-2xl text-center pt-8 font-serif font-bold">Escape to Serene Retreats</h1> 
       <p className="w-[90%] mx-auto mt-3 mb-3">Find serenity in secluded retreats and tranquil hideaways, where you can rejuvenate your body, mind, and soul amidst peaceful surroundings. Dive into the pulse of vibrant cities, where modernity meets tradition, offering bustling markets, world-class cuisine, and electrifying nightlife.</p>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {touristSpots.map((spot) => (
          <div key={spot._id} className=" p-4 shadow-lg rounded-lg border">
            <img
              src={spot.photo}
              alt={spot.country}
              className="w-full h-40 object-cover mb-2 rounded-md"
            />
            <h2 className="text-lg font-semibold">{spot.country}</h2>
            <p>{spot.description}</p>
            <button className="btn bg-blue-600">View Details</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToristSpots;
