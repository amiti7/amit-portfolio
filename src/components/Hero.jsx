export default function Hero() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
          👋 Open to Opportunities
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200">Amit Verma</span>
        </h2>
        <p className="text-xl md:text-2xl mb-4 text-indigo-100 font-light">
          Staff Engineer | Full-Stack Developer | AI Enthusiast
        </p>
        <p className="text-lg text-indigo-100 max-w-3xl mx-auto mb-8 leading-relaxed">
          7+ years crafting high-impact products with React, Python, and AI. Specialized in building scalable front-end architectures and intelligent systems.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["React", "Python", "OpenAI", "AWS", "Node.js", "JavaScript"].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-sm font-medium border border-white/20">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition shadow-lg hover:shadow-xl hover:scale-105 transform">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
