import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import GoogleReCaptcha from "./GoogleReCaptcha";

export default function ContactForm({ setSubmittedData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmittedData(data);
    reset();
    setIsRecaptchaVerified(false);
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl shadow-2xl p-8 animate-scale-in"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-105 focus:shadow-lg"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1 animate-fade-in">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-105 focus:shadow-lg"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 animate-fade-in">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 focus:scale-105 focus:shadow-lg resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1 animate-fade-in">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Google reCAPTCHA */}

      <GoogleReCaptcha setIsRecaptchaVerified={setIsRecaptchaVerified} />

      <button
        type="submit"
        disabled={isSubmitting || !isRecaptchaVerified}
        className="w-full group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-medium overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span
          className={`relative z-10 flex items-center justify-center transition-all duration-300 ${
            isSubmitting
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
        </span>

        {isSubmitting && (
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </form>
  );
}
