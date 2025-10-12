import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const CustomerOtp = ({ phone = "09123334455" }) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [i18n.language, isArabic]);

  // Handle OTP input and auto-focus next box
  const handleChange = (value, index) => {
    if (/[^0-9]/.test(value)) return; // only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    // Here, add verification logic or API call
  };

  return (
    <div
      className={`w-full max-w-md mx-auto flex flex-col items-center p-6 bg-white rounded-2xl mt-10 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <h3 className="text-2xl font-semibold text-gray-800">
        {t("otp.title")}
      </h3>

      <p className="text-gray-600 mt-2">
        {t("otp.instruction", { phone })}
      </p>

      <button className="text-[#CB1B1B] mt-3 underline">
        {t("otp.edit_number")}
      </button>

      {/* OTP Inputs */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <div className="flex justify-center gap-3 mt-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg font-semibold focus:ring-2 focus:ring-[#CB1B1B] outline-none"
            />
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-4">
          {t("otp.resend_in")}{" "}
          <span className="text-black font-medium">{t("otp.timer")}</span>
        </p>

        <button
          type="submit"
          className="bg-[#CB1B1B] text-white px-6 py-2 rounded-lg transition mt-5 hover:bg-red-600 w-[90%]"
        >
          {t("otp.verify")}
        </button>
      </form>
    </div>
  );
};

export default CustomerOtp;
