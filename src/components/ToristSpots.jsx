import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const ToristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch("https://journey-junction-server-kappa.vercel.app/touristSpots")
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
    <Fade>
    <div className="">
       <h1 className="text-2xl text-center pt-8 font-serif font-bold">Escape to Serene Retreats. <br /> Browse Your Favourite Tourist Spots </h1> 
       <p className="w-[90%] mx-auto mt-3 mb-3">Find serenity in secluded retreats and tranquil hideaways, where you can rejuvenate your body, mind, and soul amidst peaceful surroundings. Dive into the pulse of vibrant cities, where modernity meets tradition, offering bustling markets, world-class cuisine, and electrifying nightlife.</p>
    </div>
    </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {touristSpots.map((spot) => (
          <div key={spot._id} className=" p-4 shadow-2xl shadow-stone-600 rounded-lg border">
            <img
              src={spot.photo}
              alt={spot.country_Name}
              className="w-full h-40 object-cover mb-2 rounded-md"
            />
           <Fade>
           <h2 className="text-lg font-semibold">{spot.country_Name}</h2>
            <p>{spot.description}</p>
            <Link to={`/view-details/${spot._id}`}>
            <button className="btn bg-blue-600">View Details</button></Link>
           </Fade>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToristSpots;
