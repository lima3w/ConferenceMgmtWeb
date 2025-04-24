import { useQuery } from "@tanstack/react-query";

// @ts-ignore
import fetchCollection from "../lib/database";

const fetchSessions = () => fetchCollection("sessions");

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
                        <th className="p-2">Speaker</th>
                        <th className="p-2">Room</th>
                        <th className="p-2">Max Participants</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((session: any, i: any) => (
                        <tr key={i} className="border-b border-gray-700">
                            <td className="p-2">{session.title}</td>
                            <td className="p-2">
                                {session.speakers.map((speaker: any) => (
                                    <li className="list-none" key={speaker._id}>
                                        {speaker.firstName} {speaker.surName}
                                        {speaker.company &&
                                            ` (${speaker.company})`}
                                    </li>
                                ))}
                            </td>
                            <td className="p-2">
                                {session.room.roomNumber}{" "}
                                {session.room.roomName}
                            </td>
                            <td className="p-2">{session.maxParticipants}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
