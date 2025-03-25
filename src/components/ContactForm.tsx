'use client';

export default function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-charcoal rounded-xl p-8 border border-neon-green/20 shadow-lg shadow-neon-green/5">
        <form 
          className="space-y-6" 
          action="https://formspree.io/f/meojqqjd" 
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);
            
            fetch(form.action, {
              method: 'POST',
              body: formData,
              headers: {
                'Accept': 'application/json'
              }
            })
            .then(response => {
              if (response.ok) {
                // Show success message
                const successMessage = document.getElementById('success-message');
                if (successMessage) {
                  successMessage.classList.remove('hidden');
                  successMessage.classList.add('flex');
                }
                // Hide form
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                  formElement.classList.add('hidden');
                }
                // Reset form
                form.reset();
              }
            })
            .catch(error => {
              console.error('Error:', error);
            });
          }}
        >
          <div id="contact-form" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-midnight border border-neon-green/20 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-midnight border border-neon-green/20 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-midnight border border-neon-green/20 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-green to-cyber-teal text-midnight font-display font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-glow-sm"
            >
              Launch Project →
            </button>
          </div>
          
          {/* Success Message */}
          <div 
            id="success-message" 
            className="hidden flex-col items-center justify-center text-center py-8"
          >
            <div className="w-16 h-16 bg-neon-green/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-neon-green mb-2">Message Sent!</h3>
            <p className="text-gray-300 mb-6">
              Thank you for reaching out. We'll get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                const successMessage = document.getElementById('success-message');
                const formElement = document.getElementById('contact-form');
                if (successMessage) {
                  successMessage.classList.add('hidden');
                  successMessage.classList.remove('flex');
                }
                if (formElement) {
                  formElement.classList.remove('hidden');
                }
              }}
              className="text-neon-green hover:text-neon-green/80 transition-colors"
            >
              Send Another Message →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 