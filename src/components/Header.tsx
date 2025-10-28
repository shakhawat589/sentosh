import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFull from "@/assets/logo-full.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="bg-slate-950/30 backdrop-blur-3xl border-b border-white/10 shadow-2xl">
        <div className="container-custom">
          <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between lg:grid lg:grid-cols-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:opacity-80 transition-opacity lg:justify-self-start"
            >
              <img src={logoFull} alt="Sentosh" className="h-7 sm:h-8 md:h-10" />
            </button>
            
            <nav className="hidden lg:flex items-center justify-center gap-8">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'Why Us', id: 'promise' },
                { label: 'Process', id: 'features' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-sm font-medium text-white/60 hover:text-white transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-4 lg:justify-self-end">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="hidden md:flex rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-all duration-300 hover:scale-105 px-6"
              >
                Start Your Project
              </Button>
              
              <button 
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 animate-fade-in border-t border-white/10">
              <nav className="flex flex-col gap-3">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Services', id: 'services' },
                  { label: 'Why Us', id: 'promise' },
                  { label: 'Process', id: 'features' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="text-left px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary-dark mt-2"
                >
                  Start Your Project
                </Button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
