export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter text-gray-800">S.Y</div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#works" className="hover:text-blue-600 transition-colors">
            Works
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
