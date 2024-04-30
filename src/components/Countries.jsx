import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    fetch("https://journey-junction-server-kappa.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <>
    <div className="my-8">
      <h1 className="text-center text-2xl font-bold font-sans mb-2 ">Unveiling the Rich Diversity</h1>
      <p className="text-center mx-auto  lg:w-[80%] text-base  font-sans "> Discover the vibrant tapestry of Central Asian nations, each  Countries have unique Spots, breathtaking landscapes, and rich historical legacies waiting to be explored. Here you can browse all the collection Spots to from cental asian countries</p>
    </div>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
          {countries.map((country) => {
            return (
              <div className="border rounded-lg shadow-lg shadow-stone-700 p-3" key={country._id}>
                <img className="w-[340px] h-[200px] rounded-lg" src={country.image} alt="" />
                <h1 className="text-xl font-bold">{country.country_Name}</h1>
                <h1 className="text-base">{country.decription}</h1>
                <Link to={`/sortedSpots/${country.country_Name}`}>
                <button className="btn btn-info">View spots</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Countries;
