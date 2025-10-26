import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiUser,
  FiEdit3,
  FiPlusSquare,
  FiList,
  FiBookmark,
  FiLogOut
} from "react-icons/fi";
import ProfileSection from "../../components/ProfileSection/ProfileSection";
// import AddPropertyCard from "../../components/AddPropertySection/AddPropertySection";
import Register from "../auth/register/register";

const AdminPage = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("edit_info");

  const sidebarItems = [
    { key: "username", icon: FiUser, disabled: true },
    { key: "edit_info", icon: FiEdit3 },
    { key: "new_listing", icon: FiPlusSquare },
    { key: "my_listings", icon: FiList },
    { key: "saved_listings", icon: FiBookmark },
    { key: "logout", icon: FiLogOut }
  ];

  return (
    <div className="mx-auto mt-40 max-w-[1220px] w-full px-4 md:px-0 md:w-[90%] grid grid-cols-12 gap-6">
      
      {/* Sidebar */}
      <aside className="col-span-12 md:col-span-3 bg-white rounded-2xl shadow-md p-4 flex flex-col gap-2">
        {sidebarItems.map(({ key, icon: Icon, disabled }) => (
          <button
            key={key}
            disabled={disabled}
            onClick={() => !disabled && setActiveItem(key)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all
              ${activeItem === key ? "bg-black text-white font-semibold" : "hover:bg-gray-100 text-black"}
              ${disabled ? "cursor-default text-gray-400" : ""}`}
          >
            <Icon size={20} />
            <span>{t(`AdminSideBar.${key}`)}</span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
  <main className="col-span-12 md:col-span-9 min-h-0">
        {activeItem === "edit_info" && <ProfileSection />}
        {activeItem === "new_listing" && <Register/>}
        {activeItem === "my_listings" && (
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold">{t("AdminSideBar.my_listings")}</h2>
            <p className="text-gray-600 mt-2">Your existing listings will appear here.</p>
          </div>
        )}
        {activeItem === "saved_listings" && (
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold">{t("AdminSideBar.saved_listings")}</h2>
            <p className="text-gray-600 mt-2">Saved listings will be displayed here.</p>
          </div>
        )}
        {activeItem === "logout" && (
          <div className="p-6 bg-white rounded-2xl shadow-md text-red-600">
            <h2 className="text-xl font-semibold">{t("AdminSideBar.logout")}</h2>
            <p className="text-gray-600 mt-2">You have been logged out.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
