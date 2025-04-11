import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    import('emailjs-com').then((emailjs) => {
      emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
        .then(() => {
          setSubmitStatus('success');
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          setSubmitStatus('error');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    });
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center py-16 bg-gray-800"
    >
      <div className="w-full mx-4 sm:mx-10 max-w-4xl bg-gray-700 p-8 sm:p-10 rounded-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-10">
          Contact Me
        </h1>
      <RevealOnScroll>
        {submitStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
            Message sent successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center">
            Oops! Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
          <div className="w-full max-w-[400px]">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              required
              className="bg-transparent border-2 border-white text-white w-full p-2 rounded"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="w-full max-w-[400px]">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              required
              className="bg-transparent border-2 border-white text-white w-full p-2 rounded"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="w-full max-w-[400px]">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              required
              rows={5}
              className="bg-transparent border-2 border-white text-white w-full p-2 rounded"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full max-w-[400px] cursor-pointer bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
