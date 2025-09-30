import Badge from "./Badge";
import CtaButtons from "./CtaButtons";
import Stats from "./Stats";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-700`}>
          <Badge>Trusted by 10,000+ businesses worldwide</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Transform Your
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Business Services
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Streamline your operations with our AI-powered service management
            platform. Everything you need to scale your business efficiently.
          </p>

          <CtaButtons />

          <Stats />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
