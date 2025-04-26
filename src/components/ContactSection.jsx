import React, { useState } from 'react';

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

    // Simulate form submission (replace with actual EmailJS implementation)
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);

    // Uncomment and adjust this in your actual implementation
    /*
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
    */
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="inline-block text-sm font-medium tracking-wider text-blue-400 uppercase mb-2">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            Contact Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></span>
          </h1>
          <p className="text-gray-300 mt-6 max-w-lg mx-auto">
            Have a project in mind or want to explore collaboration opportunities? I'd love to hear from you!
          </p>
        </div>

        {/* Card container */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-1 bg-blue-500 rounded-tr-full rounded-tl-full"></div>
          <div className="absolute top-0 right-0 w-32 h-1 bg-blue-500 rounded-tr-full rounded-tl-full"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <div className="bg-green-900 bg-opacity-30 border border-green-500 text-green-400 px-4 py-4 rounded-lg mb-8 text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-900 bg-opacity-30 border border-red-500 text-red-400 px-4 py-4 rounded-lg mb-8 text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              Oops! Something went wrong. Please try again.
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label htmlFor="name" className="text-blue-400 text-sm font-medium mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  required
                  className="bg-gray-900 border border-gray-700 focus:border-blue-500 text-white w-full p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="text-blue-400 text-sm font-medium mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  required
                  className="bg-gray-900 border border-gray-700 focus:border-blue-500 text-white w-full p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="message" className="text-blue-400 text-sm font-medium mb-1 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                required
                rows={5}
                className="bg-gray-900 border border-gray-700 focus:border-blue-500 text-white w-full p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Additional contact info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-blue-500 bg-opacity-20 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3 className="text-white font-medium">Email</h3>
              <a href="mailto:akurax4@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                akurax4@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-blue-500 bg-opacity-20 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-white font-medium">Location</h3>
              <p className="text-gray-300">
                India
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-blue-500 bg-opacity-20 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h3 className="text-white font-medium">GitHub</h3>
              <a href="https://github.com/TarunCodesFr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                @TarunCodesFr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}