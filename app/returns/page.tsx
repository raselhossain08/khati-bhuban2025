import { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { RefreshCw, Shield, Clock, Package, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Returns & Refunds Policy - Khati Bhuban',
  description: 'Learn about our easy return and refund policy. 100% satisfaction guaranteed for all natural honey and food products.',
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Returns & Refunds', href: '/returns' }
            ]}
          />
          <div className="text-center mt-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Returns & Refunds Policy
            </h1>
            <p className="text-xl text-slate-600 mb-2">
              ফেরত ও প্রত্যাবর্তন নীতি
            </p>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Your satisfaction is our priority. We offer easy returns and quick refunds for eligible products.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
              <RefreshCw className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">7-Day Returns</h3>
              <p className="text-sm text-slate-600">Easy return process</p>
              <p className="font-bengali text-xs text-slate-500 mt-1">৭ দিনের ফেরতের সুযোগ</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Quality Guarantee</h3>
              <p className="text-sm text-slate-600">100% satisfaction</p>
              <p className="font-bengali text-xs text-slate-500 mt-1">১০০% সন্তুষ্টি গ্যারান্টি</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Quick Refunds</h3>
              <p className="text-sm text-slate-600">Within 3-5 business days</p>
              <p className="font-bengali text-xs text-slate-500 mt-1">৩-৫ কর্মদিবসে রিফান্ড</p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Return Policy */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Return Policy Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-4">
                    ✅ Eligible for Return
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Damaged or defective products received</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Wrong product delivered</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Expired products (if any)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Sealed packaging broken upon arrival</span>
                    </li>
                  </ul>
                  <p className="font-bengali text-sm text-slate-500 mt-4">
                    ক্ষতিগ্রস্ত, ভুল বা এক্সপায়ার্ড পণ্য ফেরতের eligible
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-rose-700 mb-4">
                    ❌ Not Eligible for Return
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Products damaged by customer mishandling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Opened and used food products</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Change of mind after opening</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Products purchased more than 7 days ago</span>
                    </li>
                  </ul>
                  <p className="font-bengali text-sm text-slate-500 mt-4">
                    খোলা বা ব্যবহারকৃত খাদ্য পণ্য ফেরতের eligible নয়
                  </p>
                </div>
              </div>
            </section>

            {/* Return Process */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                How to Return a Product
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Contact Customer Service</h4>
                    <p className="text-slate-600">
                      Call us at <strong>+880 16XX-XXXXXX</strong> or email at <strong>support@khatibhuban.com</strong> within 7 days of delivery.
                    </p>
                    <p className="font-bengali text-sm text-slate-500 mt-1">
                      ডেলিভারির ৭ দিনের মধ্যে আমাদের কাস্টমার সার্ভিসে যোগাযোগ করুন
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Provide Details</h4>
                    <p className="text-slate-600">
                      Share your order number, product details, and reason for return. Photos help us process faster.
                    </p>
                    <p className="font-bengali text-sm text-slate-500 mt-1">
                      অর্ডার নম্বর, পণ্যের বিবরণ এবং ফেরতের কারণ জানান
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Return Approval</h4>
                    <p className="text-slate-600">
                      We'll verify your request and provide a Return Authorization Number if eligible.
                    </p>
                    <p className="font-bengali text-sm text-slate-500 mt-1">
                      আমরা আপনার অনুরোধ যাচাই করব এবং রিটার্ন অথোরাইজেশন নম্বর দেব
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Pickup or Drop-off</h4>
                    <p className="text-slate-600">
                      We arrange pickup from your location (Dhaka) or guide you to the nearest drop-off point.
                    </p>
                    <p className="font-bengali text-sm text-slate-500 mt-1">
                      আমরা আপনার অবস্থান থেকে পিকআপের ব্যবস্থা করব
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Refund Policy */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Refund Policy
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-3">Refund Methods</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• bKash (Original payment method)</li>
                      <li>• Bank Transfer</li>
                      <li>• Store Credit (Instant)</li>
                      <li>• Cash on Pickup</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-3">Refund Timeline</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Store Credit: Instant</li>
                      <li>• bKash Refund: 1-2 business days</li>
                      <li>• Bank Transfer: 3-5 business days</li>
                      <li>• Cash Refund: During pickup</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-3">Important Refund Notes</h3>
                  <ul className="space-y-2 text-amber-700">
                    <li>• Original shipping charges are non-refundable</li>
                    <li>• Return shipping fees are borne by us for defective products</li>
                    <li>• Refund amount will be for the product value only</li>
                    <li>• Cash on Delivery orders refunded via bKash or bank transfer</li>
                  </ul>
                  <p className="font-bengali text-sm text-amber-600 mt-3">
                    * মূল ডেলিভারি চার্জ ফেরতযোগ্য নয়। ত্রুটিপূর্ণ পণ্যের ক্ষেত্রে রিটার্ন শিপিং আমরা বহন করি
                  </p>
                </div>
              </div>
            </section>

            {/* Exchange Policy */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Product Exchange
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Package className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Quick Exchange Available</h4>
                    <p className="text-slate-600">
                      We offer direct exchange for defective/wrong products. The replacement product will be delivered within 1-3 business days after return pickup.
                    </p>
                    <p className="font-bengali text-sm text-slate-500 mt-1">
                      ত্রুটিপূর্ণ/ভুল পণ্যের জন্য সরাসরি এক্সচেঞ্জ করি। রিটার্ন পিকআপের ১-৩ কর্মদিবসের মধ্যে রিপ্লেসমেন্ট ডেলিভারি
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-700 text-sm">
                    <strong>Note:</strong> Exchanges are subject to product availability. If the desired product is out of stock, we'll process a refund instead.
                  </p>
                  <p className="font-bengali text-xs text-slate-600 mt-1">
                    এক্সচেঞ্জ পণ্যের উপলব্ধতার উপর নির্ভরশীল। পণ্য না থাকলে রিফান্ড প্রক্রিয়া করা হবে
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Support */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Need Help with Returns?</h2>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                  Our customer support team is here to help you with any return or refund queries.
                </p>
                <p className="font-bengali text-green-100 mb-6">
                  রিটার্ন বা রিফান্ড সংক্রান্ত কোনো সাহায্যের জন্য আমাদের সাথে যোগাযোগ করুন
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5" />
                    <span>+880 16XX-XXXXXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5" />
                    <span>support@khatibhuban.com</span>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-green-200">
                  <p>Operating Hours: 9:00 AM - 8:00 PM (Everyday)</p>
                  <p className="font-bengali">সার্ভিস সময়: সকাল ৯টা - রাত ৮টা (প্রতিদিন)</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}