import { useEffect, useState } from "react";
import useAuth from "../firebase/useAuth";
import { Link } from "react-router-dom";

const MySpotsCard = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);

  // route for getting data from server
  useEffect(() => {
    fetch(`http://localhost:5000/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  console.log(item);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {item?.map((data) => (
        <div key={data._id} className=" p-4 rounded-lg shadow-md border">
          <img
            className="w-[350px] h-44 rounded-md mx-auto"
            src={data.photo}
            alt=""
          />
          <h1 className="text-xl font-semibold">{data.country}</h1>
          <p className=" mt-2">{data.description}</p>
          <div className="flex items-center justify-center gap-8 mt-2">
          <Link to={`/updateDetails/${data._id}`}>
          <button className="btn bg-blue-600">Update</button>
          </Link>
            <button className="btn  bg-red-800">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySpotsCard;
