import { useQuery } from "@tanstack/react-query";

// @ts-ignore
import fetchCollection from "../lib/database";

const fetchRooms = () => fetchCollection("rooms");

export default function Rooms() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["rooms"],
        queryFn: fetchRooms,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error instanceof Error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold">Rooms</h1>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                    + Create Room
                </button>
            </div>
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-700">
                    <tr>
                        <th className="p-2">Room Number</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Max Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((room: any, i: any) => (
                        <tr key={i} className="border-b border-gray-700">
                            <td className="p-2">{room.roomNumber}</td>
                            <td className="p-2">{room.roomName}</td>
                            <td className="p-2">{room.capacity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
