'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-amber-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-20 w-48 h-48 bg-emerald-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-amber-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 border border-amber-200 mb-6"
              >
                <MessageCircle className="h-4 w-4 text-amber-600 mr-2" />
                <span className="text-sm font-medium text-amber-700">
                  We&apos;re Here to Help
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Get In <span className="text-gradient">Touch</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-2xl md:text-3xl font-bengali text-slate-700 mb-6 leading-relaxed"
              >
                যোগাযোগ করুন - আমরা আপনার <span className="text-amber-600">সেবায়</span> готовы
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                Have questions about our pure natural products? Need assistance with your order? 
                We&apos;re here to help! Reach out to us through any of the following channels.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-slate-600 font-bengali mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                আমাদের খাঁটি প্রাকৃতিক পণ্য সম্পর্কে প্রশ্ন আছে? আপনার অর্ডার নিয়ে সাহায্য প্রয়োজন?
                আমরা আপনার সেবায় готов! নিচের যে কোনো মাধ্যমে আমাদের সাথে যোগাযোগ করুন।
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Contact <span className="text-gradient">Information</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple ways to reach us. We typically respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 group-hover:shadow-xl transition-all duration-300 h-full">
                    <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      {method.details.map((detail, idx) => (
                        <div key={idx} className="text-slate-700 font-medium">
                          {detail}
                        </div>
                      ))}
                    </div>
                    {method.action && (
                      <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white">
                        {method.action}
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-900">Message Sent Successfully!</div>
                      <div className="text-green-700 text-sm">
                        Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <User className="h-4 w-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <MessageCircle className="h-4 w-4" />
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="wholesale">Wholesale/Bulk Order</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <MessageCircle className="h-4 w-4" />
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Location</h3>
                <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                    <div className="text-amber-700 font-semibold">Bhuban, Bangladesh</div>
                    <div className="text-amber-600 text-sm">Pure Natural Products Since 2015</div>
                  </div>
                  
                  {/* Map Markers */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-amber-600 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                  </div>
                  <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="h-5 w-5 text-amber-600" />
                    <span>Bhuban, Dhaka Division, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span>Open: 9:00 AM - 6:00 PM (Saturday - Thursday)</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                    >
                      <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                      <p className="text-slate-600 text-sm">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Pure Goodness?
            </h2>
            <p className="text-amber-100 text-lg mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust Khati Bhuban for the purest 
              natural honey and food products from Bangladesh.
            </p>
            <p className="text-amber-100 font-bengali text-lg mb-8 leading-relaxed">
              বাংলাদেশের সবচেয়ে খাঁটি প্রাকৃতিক মধু এবং খাদ্য পণ্যের জন্য খাঁটি ভুবনের উপর 
              বিশ্বাস রাখা হাজার হাজার সন্তুষ্ট গ্রাহকের সাথে যোগ দিন।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 text-lg font-semibold">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-700 px-8 py-3 text-lg font-semibold">
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Data
const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Call',
    description: 'Speak directly with our customer support team',
    details: ['+880 1234-567890', '+880 1234-567891'],
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond promptly',
    details: ['info@khatibhuban.com', 'support@khatibhuban.com'],
    action: 'Send Email'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come visit our office and experience our products',
    details: ['Bhuban, Dhaka Division', 'Bangladesh'],
    action: 'Get Directions'
  }
];

const faqs = [
  {
    question: 'What are your business hours?',
    answer: 'We are available from 9:00 AM to 6:00 PM, Saturday through Thursday. Closed on Fridays.'
  },
  {
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes, we offer special wholesale pricing for bulk orders. Please contact us for more details.'
  },
  {
    question: 'How can I track my order?',
    answer: 'You will receive a tracking number via email once your order ships. You can also check order status in your account.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 7-day return policy for unused products in original packaging. Please contact us for returns.'
  }
];