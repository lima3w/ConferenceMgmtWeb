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
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((speaker: any) => (
                    <div
                        key={speaker._id}
                        className="bg-blue-500 rounded-2xl shadow-lg p-5 flex flex-col items-center text-center">
                        {speaker.speaker.profilePic ? (
                            <img
                                src={speaker.speaker.profilePic}
                                alt={`${speaker.speaker.firstName} ${speaker.speaker.surName}`}
                                className="w-24 h-24 rounded-full object-cover mb-3"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-3 text-gray-500 text-sm">
                                No Image
                            </div>
                        )}
                        <h3 className="text-lg font-semibold">
                            {speaker.speaker.firstName}{" "}
                            {speaker.speaker.surName}
                        </h3>
                        <h4>{speaker.speaker.jobTitle}</h4>
                        {speaker.company && (
                            <p className="text-sm text-gray-800 mt-1">
                                ({speaker.company})
                            </p>
                        )}
                        <p className="text-sm text-gray-700 mt-2 whitespace-pre-line">
                            {speaker.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
