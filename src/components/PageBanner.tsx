import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface PageBannerProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
}

export const PageBanner: React.FC<PageBannerProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs
}) => {
  return (
    <div className="relative bg-night-950 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-stone-800 overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#DFA68F_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-peach-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-olive-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Breadcrumbs */}
        <nav className="inline-flex items-center gap-1.5 text-xs text-stone-300 mb-4 bg-night-900 border border-stone-800 px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3 h-3 text-stone-500" />}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-peach-400 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-night-900 text-peach-300 border border-peach-400/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-olive-400" />
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
