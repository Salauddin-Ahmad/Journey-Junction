import { useEffect, useState } from "react";
import useAuth from "../firebase/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySpotsCard = () => {
  const { user, } = useAuth() || {};
  const [item, setItem] = useState([]);
 const [control, setControl] = useState(false);


  // route for getting data from server
  useEffect(() => {
    fetch(`http://localhost:5000/mylist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user, control]);


const handleDelete = (id) => {
    Swal.fire({
        title: "Do you want to delete this item?",
        
        showCancelButton: true,
        confirmButtonText: "Delete",
    }).then((result) => {
        if (result.isConfirmed) {
            // Proceed with the deletion
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    // Update state or perform any necessary action
                    setControl(!control);
                    Swal.fire("Deleted!", "The item has been deleted.", "success");
                } else {
                    Swal.fire("Error", "Failed to delete the item.", "error");
                }
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
                Swal.fire("Error", "An error occurred while deleting the item.", "error");
            });
        } else if (result.isDenied) {
            // Handle case where deletion is canceled
            Swal.fire("Cancelled", "Deletion cancelled.", "info");
        }
    });
};


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {item?.map((data) => (
        <div key={data._id} className=" p-4 rounded-lg shadow-md border">
          <img
            className="w-[350px] h-44 rounded-md mx-auto"
            src={data.photo}
            alt=""
          />
          <h1 className="text-xl font-semibold">{data.country_Name}</h1>
          <p className=" mt-2">{data.description}</p>
          <div className="flex items-center justify-center gap-8 mt-2">
          <Link to={`/updateDetails/${data._id}`}>
          <button className="btn bg-blue-600">Update</button>
          </Link>
            <button onClick={() => handleDelete(data._id)} className="btn  bg-red-800">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MySpotsCard;
