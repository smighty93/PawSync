import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <TopNavbar />

        <div className="mt-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;