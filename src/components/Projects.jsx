const projectList = [
  {
    title: "AI-Powered PDF Q&A Tool",
    desc: "Intelligent document analysis system enabling natural language queries on PDF content with context-aware responses.",
    tech: ["OpenAI", "LangChain", "React", "Python"],
    link: "https://github.com/amiti7",
    live: false,
    icon: "🤖"
  },
  {
    title: "Content Moderation Tool",
    desc: "Real-time AI-powered moderation platform for text and images, ensuring safety and compliance at scale.",
    tech: ["AI/ML", "React", "Node.js", "AWS"],
    link: "https://moderate.vermacodes.in",
    live: true,
    icon: "🛡️"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-3">Featured Projects</h3>
        <p className="text-center text-gray-600 mb-12">Building innovative solutions with modern technologies</p>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, i) => (
            <div key={i} className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h4 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition">{project.title}</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full font-medium">{t}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all">
                {project.live ? "View Live Demo →" : "View on GitHub →"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
