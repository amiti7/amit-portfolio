const projectList = [
  {
    title: "AI-Powered PDF Q&A Tool",
    desc: "Built with OpenAI + LangChain + React. Upload and ask questions about PDFs.",
    link: "https://github.com/amiti7",
    live: false
  },
  {
    title: "Content Moderation Tool",
    desc: "A powerful tool to moderate text and images for safety and compliance using advanced AI. Check for harmful content with real-time results.",
    link: "https://moderate.vermacodes.in",
    live: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <h3 className="text-3xl font-semibold text-center mb-10">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projectList.map((project, i) => (
          <div key={i} className="p-6 border rounded shadow-sm hover:shadow-lg transition">
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <p className="mt-2 text-gray-600">{project.desc}</p>
            <a href={project.link} className="text-indigo-600 mt-3 inline-block hover:underline">{project.live?"Live Demo": "Coming Soon"}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
