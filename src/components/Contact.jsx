import React, { forwardRef } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
            <p className="mb-8">
              Feel free to reach out to me for any opportunities, collaborations, or just to say hello. I'm always open to discussing new projects and ideas.
            </p>
            <div className="space-y-4">
              <ContactItem 
                icon={<Phone className="text-white" size={20} />} 
                title="Phone" 
                content="+91 6369211344" 
              />
              <ContactItem 
                icon={<Mail className="text-white" size={20} />} 
                title="Email" 
                content="727823tucs122@skct.edu.in" 
              />
              <ContactItem 
                icon={<MapPin className="text-white" size={20} />} 
                title="Location" 
                content="Coimbatore, Tamil Nadu, India" 
              />
              <ContactItem 
                icon={<Linkedin className="text-white" size={20} />} 
                title="LinkedIn" 
                content={
                  <a href="https://www.linkedin.com/in/joshua-arnold-leo" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/joshua-arnold-leo
                  </a>
                } 
              />
              <ContactItem 
                icon={<Github className="text-white" size={20} />} 
                title="GitHub" 
                content={
                  <a href="https://github.com/Joshua-141105" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/Joshua-141105
                  </a>
                } 
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <form
  onSubmit={(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const mailtoLink = `mailto:727823tucs122@skct.edu.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=727823tucs122@skct.edu.in&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.open(gmailLink, '_blank');

  }}
  className="bg-white text-gray-800 p-6 rounded-lg shadow-md"
>
  <h3 className="text-xl font-semibold mb-6 text-blue-900">Send Me a Message</h3>
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your Name"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your Email"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
    <input
      type="text"
      name="subject"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Subject"
    />
  </div>
  <div className="mb-6">
    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
    <textarea
      name="message"
      rows={4}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your Message"
    ></textarea>
  </div>
  <button
    type="submit"
    className="bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300 w-full"
  >
    Send Message
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
});

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-center">
    <div className="bg-blue-800 p-3 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      {typeof content === 'string' ? <p>{content}</p> : content}
    </div>
  </div>
);

Contact.displayName = 'Contact';

export default Contact;