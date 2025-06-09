import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSocialLink = (platform: string) => {
    const urls = {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      whatsapp: "https://wa.me/1234567890"
    };
    window.open(urls[platform as keyof typeof urls], "_blank");
  };

  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="flex flex-col sm:flex-row items-center mb-6 lg:mb-0">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
              <i className="fas fa-utensils text-2xl"></i>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-lg">{t('footer.brand')}</h3>
              <nav className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 text-sm mt-2">
                <button 
                  onClick={() => scrollToSection("menu")}
                  className="hover:text-gray-600"
                >
                  {t('nav.menu')}
                </button>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-gray-600"
                >
                  {t('nav.about')}
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-gray-600"
                >
                  {t('nav.contact')}
                </button>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-gray-600"
                >
                  {t('nav.services')}
                </button>
                <button 
                  onClick={() => scrollToSection("reviews")}
                  className="hover:text-gray-600"
                >
                  {t('nav.reviews')}
                </button>
              </nav>
            </div>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleSocialLink("facebook")}
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook text-xl"></i>
            </button>
            <button 
              onClick={() => handleSocialLink("twitter")}
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </button>
            <button 
              onClick={() => handleSocialLink("instagram")}
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </button>
            <button 
              onClick={() => handleSocialLink("whatsapp")}
              className="text-gray-600 hover:text-black transition-colors"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </button>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-300">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
