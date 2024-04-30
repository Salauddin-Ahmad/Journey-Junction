// Import necessary modules
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  // State to store spot details
  const [spotDetails, setSpotDetails] = useState(null);
  console.log(spotDetails);

  // Get spot ID from URL params
  const { id } = useParams();

  // Fetch spot details using ID from server
  useEffect(() => {
    fetch(`http://localhost:5000/upDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpotDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching spot details:", error);
      });
  }, [id]);

  // Render spot details
  return (
    <div>
      {spotDetails ? (
        <>
        <div className="md:flex md:flex-row  mx-auto border rounded-md px-2 shadow-lg shadow-amber-800">
        <img className="w-full lg:w-2/4 rounded-lg mx-auto" src={spotDetails.photo} alt="" />
          <div className="px-2 lg:px-4 space-y-1 mt-2">
          <h2> <span className="font-bold">Country Name:</span> {spotDetails.country}</h2>
          <p> <span className="font-bold"></span>Spot Name: {spotDetails.spot}</p>
          <p> <span className="font-bold"></span>Location Name: {spotDetails.location}</p>
          <p> <span className="font-bold"></span>Description: {spotDetails.description}</p>
          <p> <span className="font-bold"></span>Seasons: {spotDetails.season}</p>
          <p> <span className="font-bold"></span>Cost: {spotDetails.cost} USD$</p>
          <p> <span className="font-bold"></span>Total visitors per year: {spotDetails.totalVisit}</p>
          <p> <span className="font-bold"></span>Average time for travel: {spotDetails.travelTime}</p>
          <p> <span className="font-bold"></span>Addded by: {spotDetails.userName} </p>
          </div>
        </div>
         
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Export ViewDetails component
export default ViewDetails;
