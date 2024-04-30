import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSpots = () => {
  const [spots, setSpots] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://journey-junction-server-kappa.vercel.app/allSpots")
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      })
      .catch((error) => {
        console.error("Error fetching spots:", error);
      });
  }, []);


  const handleSortByCost = () => {
    const sortedSpots = [...spots].sort((a, b) => {
      // Convert cost values to numbers using parseFloat
      const costA = parseFloat(a.cost);
      const costB = parseFloat(b.cost);

      console.log(costA ,"and"  , costB)
      // Perform numerical comparison
      if (sortOrder === "asc") {
        return costA - costB; // Ascending order
      } else {
        return costB - costA; // Descending order
      }
    });
  
    // Update state with sorted spots and toggle sort order
    setSpots(sortedSpots);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  
  return (
    <>
      <div className="mb-14 lg:px-[465px]">
        <details className="dropdown">
          <summary className="m-1 btn" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Sort by Cost {sortOrder === "asc" ? "(Low to High)" : "(High to Low)"}
          </summary>
          {isDropdownOpen && (
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <button className="btn" onClick={handleSortByCost}>
                  {sortOrder === "asc" ? "Low to High" : "High to Low"}
                </button>
              </li>
            </ul>
          )}
        </details>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spots.map((spot) => (
          <div key={spot._id} className=" p-4 rounded-lg shadow-md border">
            <img
              className="w-full h-44 rounded-md object-cover"
              src={spot.photo}
              alt={spot.country}
            />
            <h1 className="text-base font-semibold">Spot Name: {spot.spot}</h1>
            <p className="text-base font-semibold">Average cost: {spot.cost}</p>
            <p className="text-base font-semibold">Total Visitors Per Year: {spot.totalVisit} </p>
            <p className="text-base font-semibold">Average Time For Travel: {spot.travelTime}</p>
            <p className="mt-2"><span className="text-base font-semibold" >Description:</span> {spot.description}</p>
            <Link to={`/view-details/${spot._id}`}>
                <button className="btn bg-blue-600">View Details</button>
              </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllSpots;
