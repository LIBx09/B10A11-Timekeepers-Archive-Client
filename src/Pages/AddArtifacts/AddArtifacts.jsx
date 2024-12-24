import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";

const AddArtifacts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const [artifactType, setArtifactType] = useState("");

  const handleChange = (e) => {
    setArtifactType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.artifactType = artifactType;
    try {
      const res = await axiosSecure.post("/artifacts", data);
      console.log("Server Response:", res.data);
      toast.success("Artifact added successfully!");
    } catch (error) {
      console.error("Error submitting artifact:", error.message);
      toast.error("Error adding artifact.");
    }
  };

  return (
    <div className="w-10/12 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 py-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Artifact name
            </label>
            <input
              type="text"
              name="artifactName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Discovered By
            </label>
            <input
              type="text"
              name="discoveredBy"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Artifact Type
            </label>

            <select
              name="artifactType"
              value={artifactType}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="" disabled>
                Choose Artifact Type
              </option>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 py-2">
          <div className=" flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Artifact Image URL
            </label>
            <input
              type="url"
              name="artifactImage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Artifact Image"
              required
            />
          </div>
          <div className=" flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Historical Context
            </label>
            <input
              type="text"
              name="historicalContext"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Historical Context"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 py-2">
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Created At
            </label>
            <input
              type="text"
              name="createdAt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Created At"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Discovered At
            </label>
            <input
              type="text"
              name="discoveredAt"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Discovered At"
              required
            />
          </div>
          <div className="mb-6 flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email address
            </label>
            <input
              type="email"
              name="adderEmail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={user.email}
              placeholder="Please Enter Your Login Email"
              //   disabled
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 py-2">
          <div className="mb-6 flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </label>
            <input
              type="text"
              name="adderName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={user.displayName}
              required
            />
          </div>
          <div className="mb-6 flex-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Present Location
            </label>
            <input
              type="text"
              name="presentLocation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Location"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddArtifacts;
