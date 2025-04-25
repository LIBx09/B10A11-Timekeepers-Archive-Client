import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import MyArtiCards from "./MyArtiCards";
import mybg from "../../assets/img/mybg.png";
import Loading from "../../components/Loading/Loading";

const MyArtifacts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const [myArtifacts, setMyArtifacts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyArtifacts = async () => {
      try {
        setLoading(true);
        const searchQuery = search ? `?search=${search}` : "";
        const res = await axiosSecure.get(
          `/artifacts/added/${user?.email}${searchQuery}`
        );
        setMyArtifacts(res.data);
      } catch (error) {
        toast.error("Failed to fetch added artifacts.", error);
      } finally {
        setLoading(false);
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
            setMyArtifacts((prev) =>
              prev.filter((artifact) => artifact._id !== _id)
            );
          }
        } catch (error) {
          Swal.fire(
            "Error!",
            "Failed to delete the artifact. Please try again.",
            error
          );
        }
      }
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed py-10"
      style={{ backgroundImage: `url(${mybg})` }}
    >
      <h2 className="text-5xl font-bold mb-6 text-center">My Artifacts</h2>

      {/* Search Form */}
      <div className="text-center">
        <form>
          <h6 className="footer-title">Search Artifacts</h6>
          <fieldset className="form-control mx-auto w-80">
            <label className="label">
              <span className="label-text">
                Search by Artifact Name or Context
              </span>
            </label>
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Search artifacts..."
              className="input input-bordered"
            />
          </fieldset>
        </form>
      </div>

      {/* Artifacts Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-10/12 mx-auto">
        {loading ? (
          <Loading />
        ) : myArtifacts.length === 0 ? (
          <p className="text-center col-span-3 text-white">
            No artifacts found.
          </p>
        ) : (
          myArtifacts.map((artifact) => (
            <MyArtiCards
              key={artifact._id}
              artifact={artifact}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyArtifacts;
