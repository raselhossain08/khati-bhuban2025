import { Metadata } from 'next';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Heart, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  MapPin,
  Clock,
  Briefcase,
  Award,
  Zap,
  Leaf
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers - Join Khati Bhuban Team',
  description: 'Build your career with Khati Bhuban. Join our mission to bring pure natural honey and foods to Bangladesh. Current job openings and opportunities.',
};

const jobOpenings = [
  {
    id: 1,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh',
    experience: '2-4 years',
    salary: '৳40,000 - ৳60,000',
    posted: '2 days ago',
    description: 'We are looking for a creative Digital Marketing Specialist to manage our online presence and drive customer engagement through various digital channels.',
    requirements: [
      'Experience in social media marketing and SEO',
      'Knowledge of Google Ads and Facebook Ads',
      'Content creation and copywriting skills',
      'Analytics and reporting experience'
    ],
    tags: ['Marketing', 'SEO', 'Social Media', 'Content']
  },
  {
    id: 2,
    title: 'E-commerce Operations Manager',
    department: 'Operations',
    type: 'Full-time',
    location: 'Dhaka, Bangladesh',
    experience: '3-5 years',
    salary: '৳50,000 - ৳80,000',
    posted: '1 week ago',
    description: 'Manage our e-commerce operations, inventory, and logistics to ensure smooth order processing and customer satisfaction.',
    requirements: [
      'Experience in e-commerce operations',
      'Inventory management knowledge',
      'Logistics and supply chain understanding',
      'Team management skills'
    ],
    tags: ['Operations', 'E-commerce', 'Logistics', 'Management']
  },
  {
    id: 3,
    title: 'Customer Support Executive',
    department: 'Customer Service',
    type: 'Full-time',
    location: 'Remote',
    experience: '1-2 years',
    salary: '৳25,000 - ৳35,000',
    posted: '3 days ago',
    description: 'Provide exceptional customer service, handle inquiries, and resolve issues to ensure customer satisfaction.',
    requirements: [
      'Excellent communication skills',
      'Customer service experience',
      'Problem-solving abilities',
      'Bangla and English proficiency'
    ],
    tags: ['Customer Service', 'Remote', 'Support', 'Communication']
  },
  {
    id: 4,
    title: 'Quality Assurance Specialist',
    department: 'Quality Control',
    type: 'Full-time',
    location: 'Bhuban, Bangladesh',
    experience: '2-3 years',
    salary: '৳30,000 - ৳45,000',
    posted: '2 weeks ago',
    description: 'Ensure the quality and purity of our honey and natural food products through rigorous testing and quality control processes.',
    requirements: [
      'Background in food science or related field',
      'Quality control experience',
      'Attention to detail',
      'Knowledge of food safety standards'
    ],
    tags: ['Quality Control', 'Food Safety', 'Testing', 'Bhuban']
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Attractive compensation package with performance bonuses',
    descriptionBn: '绩效 বোনাস সহ আকর্ষণীয় compensation package'
  },
  {
    icon: Calendar,
    title: 'Flexible Work',
    description: 'Flexible working hours and remote work options',
    descriptionBn: 'নমনীয় কর্মঘন্টা এবং রিমোট কাজের options'
  },
  {
    icon: Award,
    title: 'Career Growth',
    description: 'Clear career progression paths and skill development',
    descriptionBn: 'ক্যারিয়ার progression এবং skill development opportunities'
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Comprehensive health and medical insurance coverage',
    descriptionBn: 'সম্পূর্ণ health এবং medical insurance coverage'
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Work with passionate and supportive team members',
    descriptionBn: 'আবেগী এবং supportive team members সাথে কাজ করুন'
  },
  {
    icon: TrendingUp,
    title: 'Performance Bonus',
    description: 'Regular performance-based bonuses and incentives',
    descriptionBn: 'নিয়মিত performance-based bonuses এবং incentives'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Careers', href: '/careers' }
            ]}
          />
          <div className="text-center mt-8 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Build Your Career with Purpose
            </h1>
            <p className="text-xl text-amber-100 mb-4">
              Join us in our mission to bring pure, natural honey and foods to every home in Bangladesh
            </p>
            <p className="text-lg text-amber-200 font-bengali">
              বাংলাদেশের প্রতিটি ঘরে খাঁটি, প্রাকৃতিক মধু ও খাবার পৌঁছে দেওয়ার আমাদের মিশনে যোগ দিন
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-amber-500/20 px-4 py-2 rounded-full">
                <Users className="h-5 w-5" />
                <span>25+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2 bg-amber-500/20 px-4 py-2 rounded-full">
                <Zap className="h-5 w-5" />
                <span>Fast Growing</span>
              </div>
              <div className="flex items-center space-x-2 bg-amber-500/20 px-4 py-2 rounded-full">
                <Leaf className="h-5 w-5" />
                <span>Positive Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Join Khati Bhuban?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're not just building a company - we're building a movement for pure, natural food in Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-amber-50 rounded-2xl border border-amber-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 mb-2">
                  {benefit.description}
                </p>
                <p className="font-bengali text-sm text-slate-500">
                  {benefit.descriptionBn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Current Job Openings
            </h2>
            <p className="text-xl text-slate-600">
              Explore opportunities to grow with us
            </p>
            <p className="font-bengali text-slate-500 mt-2">
              আমাদের সাথে বেড়ে ওঠার সুযোগগুলি অন্বেষণ করুন
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-shadow p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            {job.department}
                          </Badge>
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {job.type}
                          </Badge>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-amber-600">{job.salary}</p>
                        <p className="text-sm text-slate-500">Monthly</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.experience} experience</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">
                      {job.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Key Requirements:</h4>
                      <ul className="text-slate-600 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="lg:w-48 flex-shrink-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Apply Now
                    </Button>
                    <p className="text-xs text-slate-500 text-center mt-2">
                      Applications reviewed within 48 hours
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Match Section */}
          <div className="text-center mt-12 p-8 bg-white rounded-2xl border">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Don't See a Perfect Match?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented and passionate individuals. Even if you don't see an opening that matches your skills, we'd love to hear from you.
            </p>
            <p className="font-bengali text-slate-500 mb-6">
              আমরা সবসময় মেধাবী এবং আগ্রহী ব্যক্তিদের খুঁজছি। আপনার দক্ষতার সাথে মেলে এমন কোন opening না দেখলেও, আমরা আপনার কাছ থেকে শুনতে চাই।
            </p>
            <Button variant="outline" size="lg">
              Send General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Culture & Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">🌱 Natural & Pure</h3>
                <p className="text-slate-600">
                  We believe in keeping things natural - from our products to our work culture. No artificial ingredients, no office politics.
                </p>
                <p className="font-bengali text-sm text-slate-500 mt-2">
                  আমরা জিনিসগুলিকে প্রাকৃতিক রাখতে বিশ্বাস করি - আমাদের পণ্য থেকে আমাদের কাজের সংস্কৃতি পর্যন্ত
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">🚀 Growth Mindset</h3>
                <p className="text-slate-600">
                  We're building the future of natural food in Bangladesh. Every team member has the opportunity to grow and make an impact.
                </p>
                <p className="font-bengali text-sm text-slate-500 mt-2">
                  আমরা বাংলাদেশে প্রাকৃতিক খাবারের ভবিষ্যত গড়ছি। প্রতিটি team member এর বৃদ্ধি এবং impact করার সুযোগ আছে
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">🤝 Team First</h3>
                <p className="text-slate-600">
                  We support each other's growth and celebrate wins together. Your success is our success.
                </p>
                <p className="font-bengali text-sm text-slate-500 mt-2">
                  আমরা একে অপরের বৃদ্ধিকে সমর্থন করি এবং একসাথে wins উদযাপন করি। আপনার সাফল্যই আমাদের সাফল্য
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">💡 Innovation</h3>
                <p className="text-slate-600">
                  We encourage new ideas and creative solutions. If you have a better way to do something, we want to hear it.
                </p>
                <p className="font-bengali text-sm text-slate-500 mt-2">
                  আমরা নতুন ideas এবং creative solutions উত্সাহিত করি। যদি আপনার কিছু করার更好的 way থাকে, আমরা এটি শুনতে চাই
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Hive?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Become part of a team that's making a real difference in how Bangladesh experiences natural food.
          </p>
          <p className="text-lg text-amber-200 font-bengali mb-8">
            একটি team এর অংশ হন যা বাংলাদেশ কীভাবে প্রাকৃতিক খাবার অনুভব করে তাতে একটি বাস্তব পার্থক্য তৈরি করছে
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
              View All Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-amber-500">
              Send Your CV
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}