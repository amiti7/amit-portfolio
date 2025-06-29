export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-indigo-50 text-center">
      <h3 className="text-3xl font-semibold mb-6">Get In Touch</h3>
      <p className="text-gray-700 max-w-xl mx-auto mb-6">
        Open to collaborations, freelance, and full-time roles. Reach out via email, phone, or LinkedIn.
      </p>
      <div className="space-y-2 text-lg font-medium">
        <a
          href="mailto:cs.amit.v@gmail.com"
          className="block text-indigo-700 hover:underline"
        >
          cs.amit.v@gmail.com
        </a>

        <a
          href="tel:+918960981283"
          className="block text-indigo-700 hover:underline"
        >
          +91 89609 81283
        </a>

        <a
          href="https://www.linkedin.com/in/amitvermacse"
          className="block text-indigo-700 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
