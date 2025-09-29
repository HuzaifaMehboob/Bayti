import React from "react";

interface PropertyGallerySectionProps {
  images: string[];
}

const PropertyGallerySection: React.FC<PropertyGallerySectionProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  const previewImages = images.slice(0, 5); // First 5 images for preview
  const remainingCount = images.length - previewImages.length;

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px]">
      {/* Big Hero Image */}
      <div className="col-span-2 row-span-2">
        <img
          src={previewImages[0]}
          alt="Main Property"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Remaining 4 Images */}
      {previewImages.slice(1).map((img, index) => {
        const isLast = index === previewImages.slice(1).length - 1 && remainingCount > 0;

        return (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Property ${index + 2}`}
              className="w-full h-full object-cover rounded-lg"
            />
            {isLast && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                <span className="text-white text-xl font-semibold">+{remainingCount}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PropertyGallerySection;
