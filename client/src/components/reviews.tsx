import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";

const testimonials = [
  {
    id: 1,
    text: "reviews.testimonial",
    author: "reviews.client"
  },
  {
    id: 2,
    text: "reviews.testimonial",
    author: "reviews.client"
  },
  {
    id: 3,
    text: "reviews.testimonial",
    author: "reviews.client"
  }
];

export default function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{t('reviews.title')}</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-200 text-black p-6 rounded-lg relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                    <i className="fas fa-user text-white text-xl"></i>
                  </div>
                </div>
                <div className="pt-8">
                  <p className="text-sm mb-4">{t(testimonial.text)}</p>
                  <p className="font-bold text-xs">- {t(testimonial.author)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
