import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/contexts/language-context";

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const contactFormSchema = z.object({
    firstName: z.string().min(1, t("validation.name_required")),
    lastName: z.string().min(1, t("validation.lastname_required")),
    email: z.string().email(t("validation.email_invalid")),
    message: z.string().min(10, t("validation.message_min")),
  });

  type ContactFormData = z.infer<typeof contactFormSchema>;
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: t("toast.message_sent"),
        description: t("toast.success_message"),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t("toast.error"),
        description: t("toast.error_message"),
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('contact.social_title')}</h3>
            <div className="space-y-6">
              <button 
                onClick={handleWhatsApp}
                className="flex items-center space-x-4 w-full text-left hover:text-gray-300 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-green-500 text-xl"></i>
                </div>
                <span>WhatsApp</span>
              </button>
              <button 
                onClick={handleInstagram}
                className="flex items-center space-x-4 w-full text-left hover:text-gray-300 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <i className="fab fa-instagram text-pink-500 text-xl"></i>
                </div>
                <span>Instagram</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('contact.form_title')}</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder={t('contact.first_name')} 
                            className="w-full px-4 py-2 bg-white text-black rounded border border-gray-300 focus:outline-none focus:border-green-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder={t('contact.last_name')} 
                            className="w-full px-4 py-2 bg-white text-black rounded border border-gray-300 focus:outline-none focus:border-green-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder={t('contact.email_placeholder')} 
                          className="w-full px-4 py-2 bg-white text-black rounded border border-gray-300 focus:outline-none focus:border-green-500"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder={t('contact.message_placeholder')} 
                          className="w-full px-4 py-2 bg-white text-black rounded border border-gray-300 focus:outline-none focus:border-green-500 resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-white text-black py-3 rounded font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {contactMutation.isPending ? t('contact.sending') : t('contact.send')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
