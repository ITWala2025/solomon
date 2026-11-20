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
    <div className="relative bg-gradient-to-b from-crimson-950 via-crimson-900 to-crimson-850 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-crimson-800/40 overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-crimson-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Breadcrumbs */}
        <nav className="inline-flex items-center gap-1.5 text-xs text-crimson-200/80 mb-4 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3 h-3 text-crimson-300/60" />}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-crimson-100 max-w-2xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
