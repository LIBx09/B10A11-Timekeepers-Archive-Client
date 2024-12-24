/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyArtifacts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const [myArtifacts, setMyArtifacts] = useState([]);
  const [search, setSearch] = useState("");
  console.log(myArtifacts);

  useEffect(() => {
    const fetchMyArtifacts = async () => {
      try {
        const searchQuery = search ? `?search=${search}` : "";
        const res = await axiosSecure.get(
          `/artifacts/added/${user?.email}${searchQuery}`
        );
        setMyArtifacts(res.data);
      } catch (error) {
        toast.error("Failed to fetch added artifacts.", error);
      }
    };

    if (user?.email) {
      fetchMyArtifacts();
    }
  }, [axiosSecure, search, user?.email]);

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/artifacts/delete/${_id}`);
          if (res.status === 200) {
            Swal.fire("Deleted!", "Your artifact has been deleted.", "success");
            // Optionally refresh the artifacts list
            setMyArtifacts((prev) =>
              prev.filter((artifact) => artifact._id !== _id)
            );
          }
        } catch (error) {
          Swal.fire(
            "Error!",
            "Failed to delete the artifact. Please try again.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div>
      <h2>Hello My Artifacts : {myArtifacts?.length}</h2>
      <div>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div>
        {myArtifacts.map((artifacts) => (
          <div key={artifacts._id} className="card border w-96">
            <div className="card-body">
              <h2 className="card-title">{artifacts.artifactName}</h2>
              <p>{artifacts.historicalContext}</p>
              <div className="card-actions justify-end">
                <button className="btn">
                  <Link to={`/update/${artifacts._id}`}>Update</Link>
                </button>
                <button
                  onClick={() => handleDelete(artifacts._id)}
                  className="btn"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtifacts;
