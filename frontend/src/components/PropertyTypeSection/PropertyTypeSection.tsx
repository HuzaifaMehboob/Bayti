import { useTranslation } from "react-i18next";
import { useState } from "react";
import type { IconType } from "react-icons";
import { PiBuildingLight, PiHouseLight, PiUmbrellaLight, PiTreeEvergreenLight, PiSwimmingPoolLight, PiBarnLight } from "react-icons/pi";
import { LuWaves } from "react-icons/lu";
import { MdOutlineCabin } from "react-icons/md";
import PropertyCard from "../ui/PropertyCard/PropertyCard";

const icons: Record<string, IconType> = {
  PiBuildingLight: PiBuildingLight,
  PiHouseLight: PiHouseLight,
  PiUmbrellaLight: PiUmbrellaLight,
  LuTreePine: MdOutlineCabin,
  PiTreeEvergreenLight: PiTreeEvergreenLight,
  PiSwimmingPoolLight: PiSwimmingPoolLight,
  LuWaves: LuWaves,
  PiBarnLight: PiBarnLight
};

type Category = { label: string; icon: string };
type PropertyTypeHelp = { heading?: string; categories: Category[] };

const PropertyTypeSection = () => {
  const { t } = useTranslation();
  const help = t("propertyTypeSection", { returnObjects: true }) as PropertyTypeHelp;

  // ✅ Track selected category, default = first one
  const [selected, setSelected] = useState<string | undefined>(help.categories[0]?.icon);

  // ✅ Split categories into two halves for mobile layout
  const half = Math.ceil(help.categories.length / 2);
  const firstHalf: Category[] = help.categories.slice(0, half);
  const secondHalf: Category[] = help.categories.slice(half);

  return (
    <div className="w-[90%] xl:w-[1220px] mx-auto my-24">
      <h3 className="heading-3 text-center mb-8">{help.heading}</h3>

      {/* ✅ Mobile: Two rows */}
      <div className="flex flex-col gap-4 md:hidden">
        <div className="flex justify-center gap-6">
          {firstHalf.map((category: Category, index: number) => {
            const Icon = icons[category.icon] ?? MdOutlineCabin;
            const isSelected = selected === category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center cursor-pointer"
                onClick={() => setSelected(category.icon)}
              >
                <Icon
                  className={`text-[20px] ${isSelected ? "text-red-800" : "stroke-black"}`}
                />
                <p
                  className={`mt-2 text-[14px] ${
                    isSelected ? "!text-red-800" : "text-black"
                  }`}
                >
                  {category.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-6">
          {secondHalf.map((category: Category, index: number) => {
            const Icon = icons[category.icon] ?? MdOutlineCabin;
            const isSelected = selected === category.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center cursor-pointer"
                onClick={() => setSelected(category.icon)}
              >
                <Icon
                  className={`text-[20px] ${isSelected ? "text-red-800" : "stroke-black"}`}
                />
                <p
                  className={`mt-2 text-[14px] ${
                    isSelected ? "!text-red-800" : "text-black"
                  }`}
                >
                  {category.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ Desktop: Single row */}
      <div className="hidden md:flex items-center gap-10 mx-auto max-w-fit">
        {help.categories.map((category: Category, index: number) => {
          const Icon = icons[category.icon] ?? MdOutlineCabin;
          const isSelected = selected === category.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => setSelected(category.icon)}
            >
              <Icon
                className={`text-[20px] md:text-[20px] lg:text-[30px] ${isSelected ? "text-red-800" : "stroke-black"}`}
              />
              <p
                className={`mt-2 text-[16px] md:menu_items ${
                  isSelected ? "!text-red-800" : "text-black"
                }`}
              >
                {category.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-2 mt-10 gap-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4 space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <PropertyCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default PropertyTypeSection;
