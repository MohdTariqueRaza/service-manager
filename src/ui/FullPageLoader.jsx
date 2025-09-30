export default function FullPageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500/10 to-purple-600/10">
      <div className="text-center">
        <div className="flex flex-row gap-2 justify-center">
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce [animation-delay:.7s]"></div>
        </div>
      </div>
    </div>
  );
}
