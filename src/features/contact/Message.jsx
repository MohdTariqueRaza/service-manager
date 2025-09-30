import { CheckCircle } from "lucide-react";

export default function Message({ setSubmittedData }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 text-center animate-scale-in">
      <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="h-10 w-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
      <p className="text-gray-600 mb-6">
        Thank you for reaching out. We'll get back to you within 24 hours.
      </p>
      <button
        onClick={() => setSubmittedData(null)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
      >
        Send Another Message
      </button>
    </div>
  );
}
