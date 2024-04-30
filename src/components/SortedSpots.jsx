import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SortedSpots = () => {
  const { countryName } = useParams();
  const [spots, setSpots] = useState([]);
  console.log(spots);
  useEffect(() => {
    // Fetch spots for the specified country
    const fetchSpots = async () => {
      try {
        const response = await fetch(
          `https://journey-junction-server-kappa.vercel.app/sortedSpots/${countryName}`
        );
        if (response.ok) {
          const data = await response.json();
          setSpots(data);
        } else {
          console.error("Failed to fetch spots:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching spots:", error);
      }
    };

    fetchSpots();
  }, [countryName]); // Trigger the effect whenever the countryName changes

  return (
    <>
  <div>
    <h1 className="text-2xl text-center font-bold mb-5">Browse Tourist spots in {countryName}</h1>
  </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4">
        {spots.map((spot) => (
          <div key={spot._id}>
            <div className=" p-4 shadow-xl rounded-lg border mb-6">
              <img
                src={spot.photo}
                alt={spot.country_Name}
                className="w-full  object-cover mb-2 rounded-md"
              />
              <h2> <span className="text-lg font-semibold">Spot Name:</span>  {spot.spot}</h2>
              <h2> <span className="text-lg font-semibold">Country Name:</span>  {spot.country_Name}</h2>
              <h2> <span className="text-lg font-semibold">Location: </span> {spot.location}</h2>
              <h2> <span className="text-lg font-semibold">Average Cost:</span>  {spot.cost}</h2>
              <h2> <span className="text-lg font-semibold">Seasonality:</span>  {spot.season}</h2>
              <h2> <span className="text-lg font-semibold">Description:</span>  {spot.description}</h2>
              
              <Link to={`/view-details/${spot._id}`}>
                <button className="btn bg-blue-600">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SortedSpots;
