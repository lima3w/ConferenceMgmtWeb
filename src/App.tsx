import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./components/Sidebar";
import Sessions from "./components/Sessions";
import Speakers from "./components/Speakers";
import Rooms from "./components/Rooms";
import Attendees from "./components/Attendees";
import Home from "./components/Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="grid min-h-screen grid-rows-[auto_1fr] bg-gray-900 text-white">
          <div className="grid grid-cols-[auto_1fr]">
            <Sidebar />
            <main className="w-full p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessions" element={<Sessions />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/attendees" element={<Attendees />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
