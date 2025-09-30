export default function Loader({ children }) {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="flex flex-row gap-2 justify-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce [animation-delay:.7s]"></div>
        </div>
        <p className="text-gradient mt-2">{children}</p>
      </div>
    </div>
  );
}
