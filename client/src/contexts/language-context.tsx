import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Header
    'nav.about': 'Sobre nosotros',
    'nav.menu': 'Menú',
    'nav.services': 'Servicios',
    'nav.reviews': 'Reseñas',
    'nav.contact': 'Contacto',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero
    'hero.title': 'Chefs Privados',
    'hero.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'hero.menu_button': 'Ir al menú',
    
    // About
    'about.title': 'Sobre nosotros',
    'about.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    
    // Menu
    'menu.title': 'Menú',
    'menu.tab1': 'Menú #1',
    'menu.tab2': 'Menú #2', 
    'menu.tab3': 'Menú #3',
    'menu.custom': 'Personalizado',
    'menu.appetizer': 'Platillo de entrada',
    'menu.main': 'Platillo fuerte',
    'menu.dessert': 'Postre',
    'menu.contact_info': '¡Contáctanos para más información!',
    
    // Services
    'services.title': 'Servicios',
    'services.standard_price': 'Precio estándar',
    'services.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'services.contact_us': 'Contáctanos',
    
    // Reviews
    'reviews.title': 'Reseñas',
    'reviews.testimonial': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'reviews.client': 'Cliente',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.social_title': 'Nuestras redes sociales',
    'contact.form_title': '¡Mándanos un correo!',
    'contact.first_name': 'Nombre',
    'contact.last_name': 'Apellido',
    'contact.email_placeholder': 'correo@ejemplo.com',
    'contact.message_placeholder': 'Escribe tu mensaje',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando...',
    
    // Footer
    'footer.brand': 'Chef at Home',
    'footer.copyright': '© 2024 Chef at Home. Todos los derechos reservados.',
    
    // Form validation
    'validation.name_required': 'El nombre es requerido',
    'validation.lastname_required': 'El apellido es requerido',
    'validation.email_invalid': 'Ingresa un email válido',
    'validation.message_min': 'El mensaje debe tener al menos 10 caracteres',
    
    // Toast messages
    'toast.message_sent': '¡Mensaje enviado!',
    'toast.success_message': 'Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.',
    'toast.error': 'Error',
    'toast.error_message': 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
  },
  en: {
    // Header
    'nav.about': 'About us',
    'nav.menu': 'Menu',
    'nav.services': 'Services',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp',
    
    // Hero
    'hero.title': 'Private Chefs',
    'hero.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'hero.menu_button': 'Go to menu',
    
    // About
    'about.title': 'About us',
    'about.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    
    // Menu
    'menu.title': 'Menu',
    'menu.tab1': 'Menu #1',
    'menu.tab2': 'Menu #2',
    'menu.tab3': 'Menu #3', 
    'menu.custom': 'Custom',
    'menu.appetizer': 'Appetizer',
    'menu.main': 'Main course',
    'menu.dessert': 'Dessert',
    'menu.contact_info': 'Contact us for more information!',
    
    // Services
    'services.title': 'Services',
    'services.standard_price': 'Standard price',
    'services.description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'services.contact_us': 'Contact us',
    
    // Reviews
    'reviews.title': 'Reviews',
    'reviews.testimonial': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'reviews.client': 'Client',
    
    // Contact
    'contact.title': 'Contact',
    'contact.social_title': 'Our social networks',
    'contact.form_title': 'Send us an email!',
    'contact.first_name': 'First name',
    'contact.last_name': 'Last name',
    'contact.email_placeholder': 'email@example.com',
    'contact.message_placeholder': 'Write your message',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    
    // Footer
    'footer.brand': 'Chef at Home',
    'footer.copyright': '© 2024 Chef at Home. All rights reserved.',
    
    // Form validation
    'validation.name_required': 'First name is required',
    'validation.lastname_required': 'Last name is required',
    'validation.email_invalid': 'Please enter a valid email',
    'validation.message_min': 'Message must be at least 10 characters long',
    
    // Toast messages
    'toast.message_sent': 'Message sent!',
    'toast.success_message': 'Message sent successfully. We will contact you soon.',
    'toast.error': 'Error',
    'toast.error_message': 'There was a problem sending your message. Please try again.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}