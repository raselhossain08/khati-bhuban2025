import { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Truck, Clock, Shield, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy - Khati Bhuban',
  description: 'Learn about our shipping methods, delivery timelines, and areas we serve across Bangladesh. Fast and reliable delivery guaranteed.',
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shipping & Delivery', href: '/shipping' }
            ]}
          />
          <div className="text-center mt-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Shipping & Delivery Policy
            </h1>
            <p className="text-xl text-slate-600 mb-2">
              ডেলিভারি নীতি ও শর্তাবলী
            </p>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We deliver pure natural products to your doorstep across Bangladesh with care and speed.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
              <Truck className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Free Delivery</h3>
              <p className="text-sm text-slate-600">On orders over ৳500</p>
              <p className="font-bengali text-xs text-slate-500 mt-1">৫০০ টাকার উপর অর্ডারে বিনামূল্যে ডেলিভারি</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
              <Clock className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-slate-600">1-3 business days</p>
              <p className="font-bengali text-xs text-slate-500 mt-1">১-৩ কর্মদিবসের মধ্যে</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
              <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Secure Packaging</h3>
              <p className="text-sm text-slate-600">Quality guaranteed</p>
              <p className="font-bengali text-xs text-slate-500 mt-1">সুরক্ষিত প্যাকেজিং</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border">
              <Package className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Nationwide</h3>
              <p className="text-sm text-slate-600">All over Bangladesh</p>
              <p className="font-bengali text-xs text-slate-500 mt-1">সারা বাংলাদেশে</p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Delivery Areas */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Delivery Areas & Timeline
              </h2>
              <p className="text-slate-600 mb-6">
                We deliver to all districts of Bangladesh. Delivery time may vary based on your location.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Inside Dhaka City</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Standard Delivery: 1-2 business days
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Express Delivery: Same day (Order before 2 PM)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Delivery Charge: ৳50 (Free over ৳500)
                    </li>
                  </ul>
                  <p className="font-bengali text-sm text-slate-500 mt-2">
                    ঢাকা শহরে স্ট্যান্ডার্ড ডেলিভারি ১-২ দিন, এক্সপ্রেস সেম ডে
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Outside Dhaka</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Division Cities: 2-3 business days
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      District Towns: 3-4 business days
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Upazila Areas: 4-5 business days
                    </li>
                  </ul>
                  <p className="font-bengali text-sm text-slate-500 mt-2">
                    ঢাকার বাইরে বিভাগীয় শহরে ২-৩ দিন, জেলা শহরে ৩-৪ দিন
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping Methods */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Shipping Methods & Charges
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                  <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                    <tr>
                      <th className="px-4 py-3">Service Type</th>
                      <th className="px-4 py-3">Delivery Time</th>
                      <th className="px-4 py-3">Charge</th>
                      <th className="px-4 py-3">Free Delivery</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">Standard Delivery</td>
                      <td className="px-4 py-3">1-3 business days</td>
                      <td className="px-4 py-3">৳50 - ৳120</td>
                      <td className="px-4 py-3">On orders over ৳500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">Express Delivery</td>
                      <td className="px-4 py-3">Same day (Dhaka only)</td>
                      <td className="px-4 py-3">৳100</td>
                      <td className="px-4 py-3">Not applicable</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Cash on Delivery</td>
                      <td className="px-4 py-3">As per standard</td>
                      <td className="px-4 py-3">+ ৳20 COD fee</td>
                      <td className="px-4 py-3">Delivery free over ৳500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-bengali text-sm text-slate-500 mt-4">
                * দূরবর্তী এলাকায় ডেলিভারি চার্জ কিছুটা বেশি হতে পারে
              </p>
            </section>

            {/* Order Processing */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Order Processing & Tracking
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Order Confirmation</h4>
                    <p className="text-slate-600">
                      You will receive an order confirmation email within 30 minutes of placing your order.
                    </p>
                    <p className="font-bengali text-sm text-slate-500">
                      অর্ডার দেওয়ার ৩০ মিনিটের মধ্যে আপনি একটি কনফার্মেশন ইমেইল পাবেন
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Order Processing</h4>
                    <p className="text-slate-600">
                      We process and pack your order within 24 hours (excluding weekends and holidays).
                    </p>
                    <p className="font-bengali text-sm text-slate-500">
                      ২৪ ঘন্টার মধ্যে আপনার অর্ডার প্রস্তুত ও প্যাক করা হয়
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Shipping & Tracking</h4>
                    <p className="text-slate-600">
                      Once shipped, you'll receive a tracking number to monitor your package's journey.
                    </p>
                    <p className="font-bengali text-sm text-slate-500">
                      ডেলিভারি শুরু হলে আপনি একটি ট্র্যাকিং নম্বর পাবেন
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Delivery</h4>
                    <p className="text-slate-600">
                      Our delivery agent will contact you before arrival. Please keep your phone accessible.
                    </p>
                    <p className="font-bengali text-sm text-slate-500">
                      ডেলিভারি এজেন্ট আগমনের আগে যোগাযোগ করবে। ফোনটি নিকটে রাখুন
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section className="bg-amber-50 rounded-2xl border border-amber-200 p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Important Information
              </h2>

              <div className="space-y-3 text-slate-700">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p>
                    <strong>Business Days:</strong> Our delivery timeline excludes Fridays, public holidays, and any government-announced closures.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p>
                    <strong>Delivery Attempts:</strong> We attempt delivery twice. If unsuccessful, the order will be returned and a restocking fee may apply.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p>
                    <strong>Address Accuracy:</strong> Please ensure your delivery address is complete and accurate. Additional charges may apply for address corrections.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <p>
                    <strong>Weather Conditions:</strong> Delivery may be delayed during extreme weather conditions, political unrest, or natural disasters.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-white rounded-lg border">
                <p className="font-bengali text-slate-700 text-center">
                  যেকোনো ডেলিভারি সংক্রantuan প্রশ্নের জন্য আমাদের হেল্পলাইনে কল করুন: <strong>+৮৮০ ১৬XX-XXXXXX</strong>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}