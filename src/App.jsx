import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        
        {/* Main Content */}
        <div className="pt-24">
          <Hero />
          <Skills />
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="hover:text-[#61efff]  transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="hover:text-[#61efff]  transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:lelliam.weda@gmail.com" className="hover:text-[#61efff]  transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;