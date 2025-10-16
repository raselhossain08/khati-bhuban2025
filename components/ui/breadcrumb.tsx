import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-600">
      <Link
        href="/"
        className="flex items-center hover:text-amber-600 transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-slate-400" />
          {index === items.length - 1 ? (
            <span className="text-amber-600 font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-amber-600 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}