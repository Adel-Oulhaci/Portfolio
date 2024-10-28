import { useState } from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';

function Navbar() {
  const [active, setActive] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl">
      <div className=" rounded-full bg-[#61efff]/20 backdrop-blur-lg px-3 sm:px-6 py-2 sm:py-3">
        <div className="hidden sm:flex gap-2 sm:gap-6 justify-center">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all ${
                active === id
                  ? 'bg-[#61efff] text-gray-700'
                  : 'hover:bg-white/10 text-gray-300'
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="sm:hidden">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
            <span className="text-white font-medium">Menu</span>
            <div className="w-10" />
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 text-gray-200 border border-1 border-[#61efff] rounded-2xl overflow-hidden">
              {navItems.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    setActive(id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-4 py-3  ${
                    active === id
                      ? 'bg-gray-700 border border-y-1 border-[#61efff]'
                      : 'hover:bg-gray-700 hover:border border-y-1 border-[#61efff]'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;