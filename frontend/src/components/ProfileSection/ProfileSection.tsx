import React from "react";
import { FiUser } from "react-icons/fi";
import icon from "../../assets/unkown.png";

const ProfileSection = () => {
  const [editInfo, setEditInfo] = React.useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gray-100 p-3 rounded-full">
          <FiUser size={24} className="text-black" />
        </div>
        <h2 className="text-xl font-semibold">تعديل المعلومات</h2>
      </div>

      {/* Profile Image */}
      <div className="flex flex-col items-start mb-6">
        <img
          src={icon}
          alt="profile"
          className="w-24 h-24 rounded-full border border-gray-300 object-cover mb-3"
        />
        <button
          type="button"
          disabled={!editInfo}
          className={`text-sm underline pr-3 ${
            editInfo
              ? "text-gray-600 hover:text-black"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          تغيير الصورة
        </button>
      </div>

      {/* Form */}
      <form className="grid md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">الاسم الكامل</label>
          <input
            type="text"
            value="أحمد محمد"
            disabled={!editInfo}
            className={`border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black ${
              !editInfo && "bg-gray-100 text-gray-500 cursor-not-allowed"
            }`}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">البريد الإلكتروني</label>
          <input
            type="email"
            value="ahmed@example.com"
            disabled={!editInfo}
            className={`border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black ${
              !editInfo && "bg-gray-100 text-gray-500 cursor-not-allowed"
            }`}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">رقم الهاتف</label>
          <input
            type="text"
            value="+966 50 123 4567"
            disabled={!editInfo}
            className={`border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black ${
              !editInfo && "bg-gray-100 text-gray-500 cursor-not-allowed"
            }`}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">كلمة المرور</label>
          <input
            type="password"
            value="mypassword123"
            disabled={!editInfo}
            className={`border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black ${
              !editInfo && "bg-gray-100 text-gray-500 cursor-not-allowed"
            }`}
          />
        </div>
      </form>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-8">
        {editInfo ? (
          <>
            <button
              type="button"
              onClick={() => setEditInfo(false)}
              className="border border-black px-4 py-2 rounded-xl hover:bg-gray-100 transition"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              حفظ المعلومات
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setEditInfo(true)}
            className="border-2 border-[#CB1B1B] text-[#CB1B1B] px-4 py-2 rounded-xl transition"
          >
            تعديل المعلومات
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
