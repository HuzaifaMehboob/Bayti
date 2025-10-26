import { useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";

type Props = {
  onClose: () => void;
};

const UserLogin = ({ onClose }: Props) => {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState<{ name: string; contact: string }>({
    name: "",
    contact: "" // can be phone or email
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    if (!form.name) newErrors.name = t('signup.errors.required') || "Name is required";
    if (!form.contact) newErrors.contact = t('signup.errors.required') || "Phone number or email is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("User logged in:", form);
      // handle actual login or API call here
      onClose(); // close modal on success
    }
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/20  flex flex-col items-center justify-center z-50"
      onClick={handleOverlayClick}
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      lang={i18n.language}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="userlogin-title"
        className="bg-white rounded-2xl shadow-lg w-full max-w-1/2 mx-4 p-6 relative animate-fadeIn max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label={t('login.button')}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <AiOutlineClose size={22} />
        </button>

        {/* Title */}
        <h2 id="userlogin-title" className="header-4 text-center mb-2">
          {t("userLogin.welcome")}
        </h2>
        <p className="body-xs text-center mb-6">
          {t("userLogin.instruction")}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700  body-xxs">{t('signup.first_name') || 'Name'}</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
                className="w-full body-xxs border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
                placeholder={t('signup.first_name') || 'Enter your name'}
            />
              {errors.name && <p className="text-red-500 text-sm mt-1">{t('signup.errors.required') || errors.name}</p>}
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 body-xxs">{t('login.phone_placeholder') || 'Phone number or Email'}</label>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
                className="w-full body-xxs border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#CB1B1B] outline-none"
                placeholder={t('login.phone_placeholder') || 'Enter phone number or email'}
            />
              {errors.contact && <p className="text-red-500 text-sm mt-1">{t('signup.errors.required') || errors.contact}</p>}
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 mt-1 text-sm text-gray-600">
            <input type="checkbox" className="accent-[#CB1B1B]" /> {t("userLogin.agree_terms")}
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#CB1B1B] text-white py-3 button-md rounded-lg mt-2 hover:bg-red-600 transition"
          >
            {t("userLogin.button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
