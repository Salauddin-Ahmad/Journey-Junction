import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <>
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
