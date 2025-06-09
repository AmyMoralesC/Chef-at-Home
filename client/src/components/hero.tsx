import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToMenu = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          {t('hero.description')}
        </p>
        <Button 
          onClick={scrollToMenu}
          className="bg-white text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          {t('hero.menu_button')}
        </Button>
      </div>
    </section>
  );
}
