import React, { useEffect, useState } from "react";

const AllSpots = () => {
  const [spots, setSpots] = useState([]);
  console.log(spots)
  useEffect(() => {
    fetch("http://localhost:5000/allSpots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      })
      .catch((error) => {
        console.error("Error fetching spots:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {spots.map((spot) => (
        <div key={spot._id} className=" p-4 rounded-lg shadow-md border">
          <img
            className="w-full h-44 rounded-md object-cover"
            src={spot.photo}
            alt={spot.country}
          />
          <h1 className="text-xl font-semibold">{spot.spot}</h1>
          <p className="text-base font-semibold">Average cost: {spot.cost} $</p>
          <p className="text-base font-semibold">Average Time For Travel: {spot.travelTime}</p>
          <p className="text-base font-semibold">Total Visitors Per Year: {spot.totalVisitor} </p>
          <p className="mt-2">{spot.description}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default AllSpots;
