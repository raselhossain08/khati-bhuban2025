import { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Shield, Lock, Eye, User, Database, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Khati Bhuban',
  description: 'Learn how we protect your personal information and ensure your privacy when you shop with Khati Bhuban.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy', href: '/privacy' }
            ]}
          />
          <div className="text-center mt-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 mb-2">
              গোপনীয়তা নীতি
            </p>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Last Updated */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-blue-900">Last Updated</h2>
                <p className="text-blue-700">December 1, 2024</p>
                <p className="font-bengali text-sm text-blue-600">সর্বশেষ হালনাগাদ: ১ ডিসেম্বর, ২০২৪</p>
              </div>
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-600 mb-4">
                Welcome to Khati Bhuban ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from us.
              </p>
              <p className="font-bengali text-slate-500">
                খাঁটি ভুবনে আপনাকে স্বাগতম। আমরা আপনার গোপনীয়তা রক্ষা এবং আপনার ব্যক্তিগত তথ্যের সুরক্ষা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                2. Information We Collect
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <User className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Personal Information</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Name, email address, phone number</li>
                      <li>• Shipping and billing addresses</li>
                      <li>• Payment information (processed securely through payment gateways)</li>
                      <li>• Order history and preferences</li>
                    </ul>
                    <p className="font-bengali text-sm text-slate-500 mt-2">
                      নাম, ইমেইল, ফোন নম্বর, ঠিকানা, পেমেন্ট তথ্য, অর্ডার হিস্ট্রি
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Technical Information</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• IP address and browser type</li>
                      <li>• Device information and operating system</li>
                      <li>• Pages visited and time spent on site</li>
                      <li>• Referring website or search terms</li>
                    </ul>
                    <p className="font-bengali text-sm text-slate-500 mt-2">
                      আইপি অ্যাড্রেস, ব্রাউজার তথ্য, ডিভাইসের বিবরণ, ভিজিট করা পৃষ্ঠাগুলো
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Eye className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Cookies and Tracking</h3>
                    <p className="text-slate-600 mb-2">
                      We use cookies and similar tracking technologies to enhance your shopping experience, analyze site traffic, and personalize content.
                    </p>
                    <p className="font-bengali text-sm text-slate-500">
                      আমরা কুকিজ ব্যবহার করি আপনার শপিং অভিজ্ঞতা উন্নত করতে এবং সাইট ট্রাফিক বিশ্লেষণ করতে
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                3. How We Use Your Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Order Processing</h4>
                  <p className="text-blue-700 text-sm">
                    Process and fulfill your orders, send order confirmations, and provide customer support.
                  </p>
                  <p className="font-bengali text-xs text-blue-600 mt-1">
                    অর্ডার প্রক্রিয়াকরণ, কনফার্মেশন পাঠানো এবং গ্রাহক সেবা প্রদান
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Communication</h4>
                  <p className="text-green-700 text-sm">
                    Send transactional emails, order updates, and respond to your inquiries.
                  </p>
                  <p className="font-bengali text-xs text-green-600 mt-1">
                    লেনদেন সংক্রান্ত ইমেইল, অর্ডার আপডেট এবং জিজ্ঞাসার উত্তর
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Marketing</h4>
                  <p className="text-purple-700 text-sm">
                    Send promotional offers, newsletters (with your consent), and personalized recommendations.
                  </p>
                  <p className="font-bengali text-xs text-purple-600 mt-1">
                    প্রমোশনাল অফার, নিউজলেটার এবং ব্যক্তিগতকৃত সুপারিশ
                  </p>
                </div>

                <div className="bg-amber-50 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">Improvement</h4>
                  <p className="text-amber-700 text-sm">
                    Analyze customer behavior to improve our website, products, and services.
                  </p>
                  <p className="font-bengali text-xs text-amber-600 mt-1">
                    ওয়েবসাইট, পণ্য এবং সেবা উন্নত করতে গ্রাহক আচরণ বিশ্লেষণ
                  </p>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">We DO NOT sell your personal information to third parties.</h3>
                  <p className="text-slate-600">
                    We may share your information only in the following circumstances:
                  </p>
                </div>

                <ul className="text-slate-600 space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Service Providers:</strong> With trusted partners who help us operate our website, process payments, and deliver products (e.g., delivery services, payment gateways).
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Legal Requirements:</strong> When required by law, court order, or government regulations.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or part of our assets.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      <strong>Protection:</strong> To protect our rights, property, or safety, or that of our users or others.
                    </span>
                  </li>
                </ul>

                <p className="font-bengali text-sm text-slate-500">
                  আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না। শুধুমাত্র নির্দিষ্ট পরিস্থিতিতে শেয়ার করা হতে পারে
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                5. Data Security
              </h2>

              <div className="flex items-start space-x-4">
                <Lock className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 mb-4">
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 text-sm">SSL Encryption</h4>
                      <p className="text-green-700 text-xs">All data transmitted between your browser and our servers is encrypted</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 text-sm">Secure Servers</h4>
                      <p className="text-green-700 text-xs">Your data is stored on secure servers with limited access</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 text-sm">Payment Security</h4>
                      <p className="text-green-700 text-xs">Payment information is processed through PCI-DSS compliant gateways</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h4 className="font-semibold text-green-800 text-sm">Regular Monitoring</h4>
                      <p className="text-green-700 text-xs">Continuous security monitoring and vulnerability assessments</p>
                    </div>
                  </div>

                  <p className="font-bengali text-sm text-slate-500 mt-4">
                    আমরা আপনার তথ্য সুরক্ষিত রাখতে SSL এনক্রিপশন, সুরক্ষিত সার্ভার এবং নিয়মিত মনিটরিং ব্যবহার করি
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                6. Your Rights and Choices
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Access and Control</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Access your personal information</li>
                      <li>• Correct inaccurate data</li>
                      <li>• Request deletion of your data</li>
                      <li>• Object to processing of your data</li>
                      <li>• Data portability</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Marketing Preferences</h3>
                    <ul className="text-slate-600 space-y-2">
                      <li>• Opt-out of marketing communications</li>
                      <li>• Adjust cookie preferences</li>
                      <li>• Manage newsletter subscriptions</li>
                      <li>• Control personalized ads</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-700 text-sm">
                    To exercise any of these rights, please contact us at <strong>privacy@khatibhuban.com</strong>. We will respond to your request within 30 days.
                  </p>
                  <p className="font-bengali text-xs text-blue-600 mt-1">
                    এই অধিকারগুলো প্রয়োগ করতে privacy@khatibhuban.com-এ যোগাযোগ করুন। আমরা ৩০ দিনের মধ্যে উত্তর দেব
                  </p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                7. Data Retention
              </h2>
              <p className="text-slate-600 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Typically, we retain:
              </p>
              
              <div className="bg-slate-50 rounded-lg p-4">
                <ul className="text-slate-600 space-y-2">
                  <li>• Order information: 5 years for tax and business records</li>
                  <li>• Customer account data: Until account deletion request</li>
                  <li>• Marketing data: Until consent withdrawal</li>
                  <li>• Analytics data: 26 months</li>
                </ul>
                <p className="font-bengali text-sm text-slate-500 mt-2">
                  আমরা আপনার তথ্য প্রয়োজনীয় সময়ের জন্য সংরক্ষণ করি, সাধারণত অর্ডার তথ্য ৫ বছর, অ্যাকাউন্ট ডেটা ডিলিট রিকোয়েস্ট পর্যন্ত
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-slate-600">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
              <p className="font-bengali text-sm text-slate-500 mt-2">
                আমাদের ওয়েবসাইট ১৩ বছরের কম বয়সী শিশুদের জন্য নয়। আমরা ইচ্ছাকৃতভাবে ১৩ বছরের কম বয়সীদের কাছ থেকে তথ্য সংগ্রহ করি না
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="font-bengali text-sm text-slate-500 mt-2">
                আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে আমরা আপনাকে জানাব
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-blue-100 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <p className="font-bengali text-blue-100 mb-6">
                  এই গোপনীয়তা নীতি বা আমাদের ডেটা অনুশীলন সম্পর্কে আপনার কোন প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ করুন:
                </p>
                
                <div className="space-y-2 text-blue-100">
                  <p><strong>Email:</strong> privacy@khatibhuban.com</p>
                  <p><strong>Phone:</strong> +880 16XX-XXXXXX</p>
                  <p><strong>Address:</strong> Khati Bhuban, Bhuban Road, Natural Food District, Bangladesh</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}