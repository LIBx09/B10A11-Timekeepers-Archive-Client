import { useState } from "react";

const GetTicket = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ticketType: "Standard",
    date: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await axios.post("https://timekeeper-s-archive-server.vercel.app/api/tickets", formData);
  //       alert("Ticket booked successfully!");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         ticketType: "Standard",
  //         date: "",
  //         quantity: 1,
  //       });
  //       // eslint-disable-next-line no-unused-vars
  //     } catch (error) {
  //       alert("Something went wrong!");
  //     }
  //   };

  return (
    <div className="max-w-xl mx-auto p-6 shadow-lg rounded-lg bg-white dark:bg-gray-900 dark:text-white mt-10">
      <h2 className="text-2xl font-semibold mb-6">Buy Ticket</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <select
          name="ticketType"
          value={formData.ticketType}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="Standard">Standard</option>
          <option value="VIP">VIP</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="quantity"
          min={1}
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#AAA081] text-white font-semibold rounded hover:bg-[#948a64]"
        >
          Confirm Ticket
        </button>
      </form>
    </div>
  );
};

export default GetTicket;
