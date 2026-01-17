const skills = {
  "Frontend": ["React", "JavaScript", "Next.js", "Tailwind CSS", "Redux"],
  "Backend": ["Python", "Node.js", "Express", "REST APIs"],
  "AI/ML": ["OpenAI", "LangChain", "Prompt Engineering", "RAG"],
  "Cloud & Tools": ["AWS", "Docker", "Git", "CI/CD"]
};

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-3">Technical Expertise</h3>
        <p className="text-center text-gray-600 mb-12">Technologies I work with daily</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 transition">
              <h4 className="text-lg font-bold mb-4 text-indigo-600">{category}</h4>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-700">
                    <span className="text-indigo-500">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
