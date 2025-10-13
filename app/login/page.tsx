import { Metadata } from 'next';
import Link from 'next/link';
import { LoginForm } from '@/components/auth/login-form';

export const metadata: Metadata = {
  title: 'Login - Khati Bhuban',
  description: 'Sign in to your Khati Bhuban account',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex flex-col items-center mb-8">
            <h1 className="text-3xl font-bold text-amber-700">Khati Bhuban</h1>
            <span className="text-sm font-bengali text-slate-600 -mt-1">খাঁটি ভুবন</span>
          </Link>
          <h2 className="text-2xl font-bold text-slate-900">Sign in to your account</h2>
          <p className="text-slate-600 mt-2">
            Or{' '}
            <Link href="/register" className="text-amber-600 hover:text-amber-700 font-medium">
              create a new account
            </Link>
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}