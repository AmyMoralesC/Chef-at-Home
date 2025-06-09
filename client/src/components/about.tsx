import { useLanguage } from "@/contexts/language-context";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
              alt="Professional chefs" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
