import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateDEtails = () => {
    const {id} = useParams();
    // console.log(id);
    const [details, setDetails] = useState({});
    // console.log(details);

    useEffect(() => {
        fetch(`http://localhost:5000/upDetails/${id}`)
       .then(res => res.json())
       .then(data => {
            setDetails(data);
            console.log(data);
        })
    },[id])
    return (
        <section className="bg-white dark:bg-gray-500">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl text-center font-bold text-gray-900 dark:text-white">
            Add a new Tourist Spot
          </h2>
          <form onSubmit={handleSubmit} action="#">
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
                  name="spotName"
                  id="spotName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Spot name"
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
                  name="averageCost"
                  id="averageCost"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Average Cost"
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
                  name="seasonality"
                  id="seasonality"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Season Names"
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
                  required
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  User Name
                </label>{" "}
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Please Type Your Name"
                  required
                />{" "}
              </div>{" "}
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
                  required
                />{" "}
              </div>{" "}
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
                  required
                />
              </div>
            </div>{" "}
  
  
            <div className="flex items-center justify-center mt-3">
              <button
                type="submit"
                className="btn btn-primary hover:bg-blue-600"
              >
                Add product
              </button>
  
  
            </div>
          </form>
        </div>
      </section>
    );
};

export default UpdateDEtails;