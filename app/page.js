import AdminDashboard from "@/components/admin-dashboard";
import UserTracker from "@/components/user-tracking";

export default function Home() {
  return (
    <div className="flex gap-12 pt-20 justify-center items-start">
      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">User View</h1>
        <UserTracker userId="user123" />
      </div>
      <div className="bg-gray-100 p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <AdminDashboard />
      </div>
    </div>
  );
}
