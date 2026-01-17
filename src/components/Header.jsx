export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AV</h1>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          <a href="#" className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">Resume</a>
        </nav>
      </div>
    </header>
  );
}
