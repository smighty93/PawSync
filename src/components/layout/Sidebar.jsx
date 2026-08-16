import { NavLink, useLocation } from "react-router-dom";
import ownerMenu from "../../config/menus/ownerMenu";
import adminMenu from "../../config/menus/adminMenu";

function Sidebar() {
  const location = useLocation();

  // Detect role from URL
  const isAdmin = location.pathname.startsWith("/admin");

  // Choose correct menu
  const menuItems = isAdmin ? adminMenu : ownerMenu;

  return (
    <aside className="w-72 bg-white shadow-lg p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-blue-600 mb-10">
        🐾 PawSync
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 p-3 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-50 hover:text-blue-600"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;