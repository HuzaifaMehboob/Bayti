import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import registerImage from '../../../assets/register_image.png';

const AgentSignup: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    role: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    if (!form.firstName) newErrors.firstName = t("signup.errors.required");
    if (!form.lastName) newErrors.lastName = t("signup.errors.required");
    if (!form.email) newErrors.email = t("signup.errors.required");
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = t("signup.errors.invalid_email");
    if (!form.phone) newErrors.phone = t("signup.errors.required");
    if (!form.password) newErrors.password = t("signup.errors.required");
    if (!form.confirmPassword) newErrors.confirmPassword = t("signup.errors.required");
    else if (form.password !== form.confirmPassword) newErrors.confirmPassword = t("signup.errors.password_match");
    if (!form.role) newErrors.role = t("signup.errors.required");
    if (!form.agreeTerms) newErrors.agreeTerms = t("signup.errors.required");
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // TODO: call signup API
      console.log("Signup form data:", form);
    }
  };

  const FormInner: React.FC = () => (
    <div className="w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-gray-800">{t("signup.title")}</h2>
      <p className="text-gray-600 mt-2">{t("signup.welcome")}</p>
      <p className="text-sm text-gray-500 mt-1">{t("signup.instruction")}</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">{t("signup.first_name")}</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 mb-1">{t("signup.last_name")}</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">{t("signup.email")}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">{t("signup.phone")}</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">{t("signup.company_name")}</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">{t("signup.role")}</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
          >
            <option value="">{t("signup.role_placeholder")}</option>
            <option value="agent">{t("signup.agent")}</option>
            <option value="company">{t("signup.company")}</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
        </div>

        <div className="relative">
          <label className="block text-gray-700 mb-1">{t("signup.password")}</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </button>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">{t("signup.confirm_password")}</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={form.agreeTerms}
            onChange={handleChange}
            className="accent-[#CB1B1B]"
          />
          {t("signup.agree_terms")}
        </label>
        {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}

        <button
          type="submit"
          className="w-full bg-[#CB1B1B] text-white py-3 rounded-lg mt-4 hover:bg-red-600 transition"
        >
          {t("signup.signup_button")}
        </button>

        <p className="text-sm text-gray-600 mt-4">
          {t("signup.have_account")} {" "}
          <span className="text-[#CB1B1B] font-medium hover:underline cursor-pointer">
            {t("signup.login_here")}
          </span>
        </p>
      </form>
    </div>
  );

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Desktop / md+ layout: side-by-side */}
      <div className="hidden md:flex h-full w-full">
        <div className="w-[40vw] h-full shrink-0">
          <img src={registerImage} alt="Register" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-center flex-1 overflow-y-auto p-6 scrollbar-hide">
          <FormInner />
        </div>
      </div>

      {/* Mobile layout: image full-screen with centered overlay */}
      <div className="md:hidden h-full w-full">
        <img src={registerImage} alt="Register" className="w-full h-full object-cover" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 w-[90%] max-w-md overflow-y-auto max-h-[90vh]">
            <FormInner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSignup;
