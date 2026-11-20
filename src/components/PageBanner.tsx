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
    <div className="relative bg-[#AAA77B] text-night-950 pt-20 pb-9 px-4 sm:px-6 lg:px-8 border-b border-olive-600/30 overflow-hidden">
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Breadcrumbs */}
        <nav className="inline-flex items-center gap-1.5 text-xs text-night-950 mb-3 bg-white/75 border border-olive-600/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-sm font-medium">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3 h-3 text-night-950/60" />}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-peach-800 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-night-950 font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        {badge && (
          <div className="flex justify-center mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-night-950 text-stone-100 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-peach-400" />
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-night-950 mb-2.5">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-night-950/85 max-w-2xl mx-auto leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
