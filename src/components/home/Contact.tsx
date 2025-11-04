import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPlus } from 'react-icons/fa';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: [] as string[]
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(value)
        ? formData.interests.filter(i => i !== value)
        : [...formData.interests, value]
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  const faqItems = [
    { question: 'What services does Blink offer?', answer: 'Blink specializes in web development, mobile apps, e-commerce solutions, brand identity design, web applications, 3D animation, social media marketing, and brand strategy consulting. We provide end-to-end digital solutions tailored to your needs.' },
    { question: 'How long does a typical project take?', answer: 'Project timelines vary based on scope and complexity. A simple website typically takes 4-8 weeks, while more complex projects like e-commerce platforms or custom web applications can take 12-16 weeks. We provide detailed timelines during our initial consultation.' },
    { question: 'What is your design and development process?', answer: 'Our process begins with understanding your goals and requirements. We then move through design concepts, development, testing, and deployment phases. We maintain open communication throughout, providing regular updates and incorporating your feedback at each stage.' },
    { question: 'Do you provide ongoing support and maintenance?', answer: 'Yes, we offer comprehensive maintenance packages to keep your website or application updated, secure, and performing optimally. We also provide training and documentation to help you manage your digital assets effectively.' },
    { question: 'Can you work with existing brands or only create new ones?', answer: 'We work with both new and existing brands. Whether you need a complete rebrand or want to enhance your current brand identity, we adapt our services to meet your specific needs and maintain consistency with your existing brand elements when appropriate.' }
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-8">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#F8F5ED] to-[#FAF8F3] p-8 rounded-2xl shadow-sm">
            <p className="text-gray-700 text-sm font-medium mb-2 uppercase tracking-wider">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let's talk about<br />your problem.
            </h1>
          </div>

          {/* Location & Help */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F5F0E8] p-6 rounded-xl shadow-sm border border-[#EFE8D8]">
              <div className="flex items-start gap-3">
                <div className="bg-[#F8F5ED] p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-gray-700 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-sm text-gray-700">401 Broadway, 24th Floor,</p>
                  <p className="text-sm text-gray-700">Orchard Cloud View, London</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F0E8] p-6 rounded-xl shadow-sm border border-[#EFE8D8]">
              <div className="flex items-start gap-3">
                <div className="bg-[#F8F5ED] p-2 rounded-lg">
                  <FaEnvelope className="text-gray-700 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">How Can We Help?</h3>
                  <p className="text-sm text-gray-700">info@yourdomain.com</p>
                  <p className="text-sm text-gray-700">contact@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#F2EDE0] p-8 rounded-2xl shadow-sm border border-[#EFE8D8]">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQ</h2>
            <div className="space-y-3">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-[#EFE8D8] last:border-0 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left hover:text-gray-800 transition-colors duration-200"
                  >
                    <span className="text-gray-900 font-medium">{item.question}</span>
                    <FaPlus className={`text-gray-700 transition-all duration-300 ease-in-out ${expandedFaq === index ? 'rotate-45' : 'rotate-0'}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-700 pb-4 text-sm">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#F5F0E8] p-8 rounded-2xl shadow-sm border border-[#EFE8D8]">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Reach out to us today!</h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gray-700 text-sm mb-3">Mail us at</p>
              <p className="text-gray-900 font-semibold mb-4">info@yourcompany.com</p>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 text-sm">OR</span>
                <button type="button" className="bg-[#EFE8D8] hover:bg-[#F2EDE0] p-3 rounded-lg transition-colors">
                  <FaFacebookF className="text-gray-800" />
                </button>
                <button type="button" className="bg-[#EFE8D8] hover:bg-[#F2EDE0] p-3 rounded-lg transition-colors">
                  <FaTwitter className="text-gray-800" />
                </button>
              </div>
            </div>

            <div className="border-t border-[#EFE8D8] pt-6">
              <p className="text-gray-700 text-sm mb-4">Leave us a brief message</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full bg-[#FAF8F3] border border-[#EFE8D8] rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full bg-[#FAF8F3] border border-[#EFE8D8] rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-gray-800 text-sm mb-2 block">Briefly describe your project idea...</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Briefly describe your project idea..."
                  rows={4}
                  className="w-full bg-[#FAF8F3] border border-[#EFE8D8] rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:bg-white resize-none"
                />
              </div>

              <div className="mb-6">
                <label className="text-gray-800 text-sm mb-3 block">I'm looking for...</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'website', label: 'Website' },
                    { value: 'mobile', label: 'Mobile App' },
                    { value: 'ecommerce', label: 'E-Commerce' },
                    { value: 'brand', label: 'Brand Identity' },
                    { value: 'social', label: 'Social Media Marketing' },
                    { value: 'strategy', label: 'Brand Strategy & Consulting' },
                    { value: 'webapp', label: 'Web App' },
                    { value: '3d', label: '3D & Animation' },
                    { value: 'other', label: 'Other' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 text-gray-800 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option.value)}
                        onChange={() => handleCheckboxChange(option.value)}
                        className="w-4 h-4 bg-white border-[#EFE8D8] rounded accent-gray-700"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#F8F5ED] hover:bg-[#F2EDE0] text-gray-900 font-semibold py-3 rounded-lg transition-colors"
              >
                Send a message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;