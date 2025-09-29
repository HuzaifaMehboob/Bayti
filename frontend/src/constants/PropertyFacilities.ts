import { PiGarageLight, PiWarehouseLight } from "react-icons/pi"; // Parking, Storage
import { TbElevator } from "react-icons/tb"; // Elevator (works!)
import { GiBrickWall } from "react-icons/gi"; // Floor material (close representation)
import { LuBath, LuToilet, LuSnowflake, LuFlame } from "react-icons/lu"; // Bath, Toilet, Cooling, Heating

export const facilities = [
    { label: "پارکینگ", value: "۱", icon: PiGarageLight },
    { label: "انباری", value: "۱", icon: PiWarehouseLight },
    { label: "آسانسور", value: "۲", icon: TbElevator },
    { label: "جنس کف", value: "سرامیک", icon: GiBrickWall },
    { label: "سرویس بهداشتی", value: "۲", icon: LuBath },
    { label: "نوع سرویس بهداشتی", value: "فرنگی", icon: LuToilet },
    { label: "سیستم سرمایش", value: "چیلر", icon: LuSnowflake },
    { label: "سیستم گرمایش", value: "نوساز", icon: LuFlame },
  ];

export const extrapropertyDetails = [
  { label: "سن بنا", value: "نوساز" },
  { label: "موقعیت جغرافیایی بنا", value: "شمالی" },
  { label: "نوع سند", value: "شخصی" },
  { label: "امکانات امنیتی", value: "آیفون تصویری، درب ضدسرقت" },
  { label: "سایر امکانات", value: "کمد دیواری، پنجره‌ها UPVC" },
  { label: "زمان بازدید", value: "۷ صبح تا ۱۱ شب" },
];
