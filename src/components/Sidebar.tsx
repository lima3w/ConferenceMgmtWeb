import { NavLink } from "react-router-dom";
import { Home, Users, Video, DoorOpen } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "Sessions", path: "/sessions", icon: <Video size={18} /> },
  { name: "Speakers", path: "/speakers", icon: <Users size={18} /> },
  { name: "Rooms", path: "/rooms", icon: <DoorOpen size={18} /> },
  { name: "Attendees", path: "/attendees", icon: <Users size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-4 space-y-4">
      <div className="text-xl font-bold">TECH CONFERENCE</div>
      <nav className="space-y-2">
        {navItems.map(({ name, path, icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            {icon}
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
