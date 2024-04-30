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
  <div className="overflow-x-auto">
    <table className="table-auto">
      <thead className="border">
        <tr>
          <th className="hidden sm:table-cell px-4 py-2 border-4 border-yellow-600">Image</th>
          <th className="px-4 py-2 border-4 border-yellow-600 ">Country Name</th>
          <th className="px-4 py-2 border-4 border-yellow-600">Description</th>
          <th className="px-4 py-2 border-4 border-yellow-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        {item?.map((data) => (
          <tr className="border" key={data._id}>
            <td className="hidden sm:table-cell px-4 py-2 border-4 border-emerald-700">
              <img className="w-[100px] h-[100px] rounded-md" src={data.photo} alt="" />
            </td>
            <td className="lg:px-4 py-2 lg:text-lg lg:font-extrabold font sans border-4 border-emerald-700">{data.country_Name}</td>
            <td className="lg:px-4 py-2 border-4 border-emerald-700">{data.description}</td>
            <td className="lg:px-4 py-2 border-4 border-emerald-700">
              <div className="flex flex-col sm:flex-row gap-2">
                <Link to={`/updateDetails/${data._id}`}>
                  <button className="btn bg-blue-600">Update</button>
                </Link>
                <button onClick={() => handleDelete(data._id)} className="btn bg-red-800">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


  

};

export default MySpotsCard;
