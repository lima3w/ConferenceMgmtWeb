import { useQuery } from "@tanstack/react-query";

const fetchSessions = async () => {
  const url_base = import.meta.env.VITE_CM_API_URL;
  const url_full = `${url_base}/sessions`;
  const res = await fetch(url_full);
  console.log(url_full);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function Sessions() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["sessions"],
    queryFn: fetchSessions,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Sessions</h1>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
          + Create Session
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-2">Title</th>
            {/* <th className="p-2">Speaker</th>
            <th className="p-2">Room</th>
            <th className="p-2">Attendees</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((session: any, i: any) => (
            <tr key={i} className="border-b border-gray-700">
              <td className="p-2">{session}</td>
              {/* <td className="p-2">{session.speaker}</td>
              <td className="p-2">{session.room}</td> */}
              {/* <td className="p-2">{session.attendees}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
