import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDEtails = () => {
  const { id } = useParams();
  // console.log(id);
  const [details, setDetails] = useState({});
  // console.log(details);

  // get data from sever
  useEffect(() => {
    fetch(`http://localhost:5000/upDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      });
  }, [id]);

  const handleUpdate = (event) => {
    event.preventDefault();
    // const originalName = user.email;
    // const email = form.email.value;
    // const name = form.name.value;

    const form = event.target;
    console.log(form);
    const photo = form.photo.value;
    const country = form.country.value;
    const spot = form.spot.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const travelTime = form.travelTime.value;
    const totalVisit = form.totalVisit.value;
    const description = form.description.value;

    const info = {
      country,
      cost,
      season,
      travelTime,
      totalVisit,
      description,
      location,
      spot,
      photo,
    };
    console.log(info);

    // Update information
    fetch(`http://localhost:5000/updateSpot/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update spot");
        }
        return res.json();
      })
      .then((data) => {
        if (data?.modifiedCount) {
          Swal.fire({
            text: "Data Updated successfully",
            icon: "success",
          });
        } else {
          throw new Error("Failed to update spot");
        }
      })
      .catch((error) => {
        console.error("Error updating spot:", error);
        Swal.fire({
          text: "An error occurred while updating spot",
          icon: "error",
        });
      });
  };

  return (
    <section className="bg-white dark:bg-gray-500">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl text-center font-bold text-gray-900 dark:text-white">
          Update Your Tourist Spot Here :-
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              {" "}
              <label
                htmlFor="Country name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country name
              </label>{" "}
              <input
                type="text"
                name="country"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Country Name"
                defaultValue={details.country}
                required
              />
            </div>
            <div className="w-full">
              {" "}
              <label
                htmlFor="Spot Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Spot name
              </label>{" "}
              <input
                type="text"
                name="spot"
                id="spot"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Spot name"
                defaultValue={details.spot}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Location here"
                defaultValue={details.location}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                type="text"
                name="photo"
                id="photo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Photo URl"
                defaultValue={details.photo}
                required
              />
            </div>
            <div>
              {" "}
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Average Cost
              </label>{" "}
              <input
                type="text"
                name="cost"
                id="cost"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Average Cost"
                defaultValue={details.cost}
                required
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seasonality
              </label>{" "}
              <input
                type="text"
                name="season"
                id="season"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Season Names"
                defaultValue={details.season}
                required
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Travel Time
              </label>{" "}
              <input
                type="text"
                name="travelTime"
                id="travelTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Travel Time For Visits"
                defaultValue={details.travelTime}
                required
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Total Visits Per Year
              </label>{" "}
              <input
                type="number"
                name="totalVisit"
                id="totalVisit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Total Yearly Vistors"
                defaultValue={details.totalVisit}
                required
              />{" "}
            </div>{" "}
            {/* user name and email */}
            {/* <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Please Type Your Name"
                  defaultValue={details?.userName}
                  required
                />
              </div>
              <div>
                {" "}
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Email
                </label>{" "}
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Your Email"
                  defaultValue={details?.email}
                  required
                />{" "}
              </div> */}
            {/* short description */}
            <div className="sm:col-span-2">
              <label
                htmlFor="Short Description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Short Description
              </label>{" "}
              <input
                type="text"
                name="description"
                id="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write Short Description"
                defaultValue={details.description}
                required
              />
            </div>
          </div>{" "}
          <div className="flex items-center justify-center mt-3">
            <button type="submit" className="btn btn-primary hover:bg-blue-600">
              Update Details
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateDEtails;
