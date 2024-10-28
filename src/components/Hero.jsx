function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Software Engineer
          <span className="block text-[#61efff]">&amp; Web Developer</span>
        </h2>
        <p className="text-gray-300 text-lg">
          Crafting elegant solutions through code and design
        </p>
        <button className="bg-[#61efff] hover:bg-[#49dcec] text-gray-700 transition-colors px-8 py-3 rounded-full font-semibold shadow-lg">
          Get in Touch
        </button>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <img 
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop"
            alt="Developer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;