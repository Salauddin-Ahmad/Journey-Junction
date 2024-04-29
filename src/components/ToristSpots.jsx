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
    <div className="grid grid-cols-2 gap-4">
      {touristSpots.map((spot) => (
        <div key={spot._id} className="bg-white p-4 shadow rounded-md">
          <img src={spot.photo} alt={spot.country} className="w-full h-40 object-cover mb-2 rounded-md" />
          <h2 className="text-lg font-semibold">{spot.country}</h2>
          <p>{spot.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ToristSpots;
