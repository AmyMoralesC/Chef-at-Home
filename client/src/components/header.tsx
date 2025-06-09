import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black/90 backdrop-blur-sm"
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="text-lg font-bold hover:text-gray-300 transition-colors"
          >
            Chef at Home
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-gray-300 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection("menu")}
              className="text-sm hover:text-gray-300 transition-colors"
            >
              {t('nav.menu')}
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-sm hover:text-gray-300 transition-colors"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection("reviews")}
              className="text-sm hover:text-gray-300 transition-colors"
            >
              {t('nav.reviews')}
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-gray-300 transition-colors"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition-colors"
            >
              <i className="fab fa-whatsapp mr-1"></i> {t('nav.whatsapp')}
            </Button>
            <div className="flex border border-gray-600 rounded">
              <button 
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 text-sm transition-colors ${
                  language === "es" ? "bg-white text-black" : "hover:bg-gray-800"
                }`}
              >
                Es
              </button>
              <button 
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-sm transition-colors ${
                  language === "en" ? "bg-white text-black" : "hover:bg-gray-800"
                }`}
              >
                En
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-sm hover:text-gray-300 transition-colors py-2"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection("menu")}
                className="text-left text-sm hover:text-gray-300 transition-colors py-2"
              >
                {t('nav.menu')}
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-left text-sm hover:text-gray-300 transition-colors py-2"
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection("reviews")}
                className="text-left text-sm hover:text-gray-300 transition-colors py-2"
              >
                {t('nav.reviews')}
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm hover:text-gray-300 transition-colors py-2"
              >
                {t('nav.contact')}
              </button>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                <Button 
                  onClick={handleWhatsApp}
                  className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition-colors w-full"
                >
                  <i className="fab fa-whatsapp mr-1"></i> {t('nav.whatsapp')}
                </Button>
                <div className="flex border border-gray-600 rounded w-full">
                  <button 
                    onClick={() => setLanguage("es")}
                    className={`flex-1 px-3 py-2 text-sm transition-colors ${
                      language === "es" ? "bg-white text-black" : "hover:bg-gray-800"
                    }`}
                  >
                    Es
                  </button>
                  <button 
                    onClick={() => setLanguage("en")}
                    className={`flex-1 px-3 py-2 text-sm transition-colors ${
                      language === "en" ? "bg-white text-black" : "hover:bg-gray-800"
                    }`}
                  >
                    En
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
