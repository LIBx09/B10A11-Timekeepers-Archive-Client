// Sample schedule data
const scheduleData = [
  { day: "Monday", open: "9:00 AM", close: "5:00 PM", note: "" },
  { day: "Tuesday", open: "9:00 AM", close: "5:00 PM", note: "" },
  { day: "Wednesday", open: "9:00 AM", close: "5:00 PM", note: "" },
  { day: "Thursday", open: "9:00 AM", close: "5:00 PM", note: "" },
  { day: "Friday", open: "10:00 AM", close: "6:00 PM", note: "Extended hours" },
  { day: "Saturday", open: "10:00 AM", close: "4:00 PM", note: "Family Day" },
  { day: "Sunday", open: "Closed", close: "", note: "Closed for maintenance" },
];

// Utility to highlight current day (optional)
const getToday = () => {
  const todayIndex = new Date().getDay(); // 0 (Sun) to 6 (Sat)
  const map = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return map[todayIndex];
};

const OpenHours = () => {
  const today = getToday();

  return (
    <section className="max-w-4xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6">
        🕰️ Museum Opening Hours
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm sm:text-base border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left border-b">Day</th>
              <th className="px-4 py-3 text-left border-b">Opening</th>
              <th className="px-4 py-3 text-left border-b">Closing</th>
              <th className="px-4 py-3 text-left border-b">Note</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, idx) => {
              const isToday = item.day === today;
              const isClosed = item.open === "Closed";

              return (
                <tr
                  key={idx}
                  className={`transition-colors ${
                    isToday
                      ? "bg-blue-50 dark:bg-blue-900"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  } ${
                    isClosed
                      ? "text-red-600 dark:text-red-400 font-semibold"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  <td className="px-4 py-3 font-medium">{item.day}</td>
                  <td className="px-4 py-3">{item.open}</td>
                  <td className="px-4 py-3">{item.close || "--"}</td>
                  <td className="px-4 py-3 italic text-gray-500 dark:text-gray-400">
                    {item.note || "--"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        📌{" "}
        <span className="italic">
          Special closures will be announced in advance. Check back regularly!
        </span>
      </div>
    </section>
  );
};

export default OpenHours;
