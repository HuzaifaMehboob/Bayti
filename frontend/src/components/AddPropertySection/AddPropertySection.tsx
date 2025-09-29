import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiHome, FiMapPin, FiDollarSign, FiUpload, FiX } from "react-icons/fi";
import { FaBed, FaBath } from "react-icons/fa";

const AddPropertyCard = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "apartment",
    rooms: "",
    baths: "",
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Property:", formData);
    alert(t("Add_Listing.submit") + " ✅");
  };

  return (
    <div
      className={`max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 ${
        isRTL ? "text-right" : "text-left"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
        <FiHome /> {t("Add_Listing.heading")}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Title */}
        <div className="flex flex-col md:col-span-1">
          <label className="mb-1 text-sm font-medium">
            {t("Add_Listing.title")}
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder={t("Add_Listing.title_placeholder")}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-1">
          <label className="mb-1 text-sm font-medium">
            {t("Add_Listing.description")}
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder={t("Add_Listing.description_placeholder")}
            rows={3}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium flex items-center gap-2">
            <FiDollarSign /> {t("Add_Listing.price")}
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder={t("Add_Listing.price")}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium flex items-center gap-2">
            <FiMapPin /> {t("Add_Listing.location")}
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder={t("Add_Listing.location_placeholder")}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Property Type */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">
            {t("Add_Listing.type")}
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="apartment">{t("Add_Listing.apartment")}</option>
            <option value="villa">{t("Add_Listing.villa")}</option>
            <option value="house">{t("Add_Listing.house")}</option>
            <option value="commercial">{t("Add_Listing.commercial")}</option>
          </select>
        </div>

        {/* Rooms */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium flex items-center gap-2">
            <FaBed /> {t("Add_Listing.rooms")}
          </label>
          <input
            type="number"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            placeholder={t("Add_Listing.rooms")}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Baths */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium flex items-center gap-2">
            <FaBath /> {t("Add_Listing.baths")}
          </label>
          <input
            type="number"
            name="baths"
            value={formData.baths}
            onChange={handleChange}
            placeholder={t("Add_Listing.baths")}
            className="border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Image Upload */}
        <div className="md:col-span-2">
          <label className="mb-1 text-sm font-medium flex items-center gap-2">
            <FiUpload /> {t("Add_Listing.upload_photos")}
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="border p-3 rounded-xl w-full"
          />

          {/* Preview */}
          {formData.images.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-3">
              {formData.images.map((file, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 border rounded-xl overflow-hidden"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  >
                    <FiX size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-end mt-6">
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            {t("Add_Listing.submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPropertyCard;
