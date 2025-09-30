import ReCAPTCHA from "react-google-recaptcha";
import { SITE_KEY } from "../../utils/contants";
export default function GoogleReCaptcha({ setIsRecaptchaVerified }) {
  function handleRecaptchaChange(value) {
    setIsRecaptchaVerified(!!value);
  }
  return (
    <div className="mb-6 hover:scale-102 transition-transform duration-300">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Security Check
      </label>
      <ReCAPTCHA sitekey={SITE_KEY} onChange={handleRecaptchaChange} />
    </div>
  );
}
