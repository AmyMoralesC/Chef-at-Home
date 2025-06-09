import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export default function Services() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{t('services.title')}</h2>
        <div className="max-w-md mx-auto text-center">
          <div className="bg-gray-300 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold">$75</span>
          </div>
          <h3 className="text-xl font-bold mb-4">{t('services.standard_price')}</h3>
          <p className="text-gray-700 mb-6">
            {t('services.description')}
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            {t('services.contact_us')}
          </Button>
        </div>
      </div>
    </section>
  );
}
