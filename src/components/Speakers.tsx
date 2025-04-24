import { useQuery } from "@tanstack/react-query";

// @ts-ignore
import fetchCollection from "../lib/database";

const fetchSpeakers = () => fetchCollection("speakers");

export default function Speakers() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["speakers"],
        queryFn: fetchSpeakers,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Speakers</h1>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                    + Create Speaker
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
                    {data.map((speaker: any, i: any) => (
                        <tr key={i} className="border-b border-gray-700">
                            <td className="p-2">{speaker.title}</td>
                            {/* <td className="p-2">{speaker.speaker}</td>
              <td className="p-2">{speaker.room}</td> */}
                            {/* <td className="p-2">{speaker.attendees}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
